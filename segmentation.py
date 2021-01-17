import PIL.ImageOps
import numpy as np
import cv2
import glob
import os
import scipy.misc
import operator
# from scipy.misc import imageio.imwrite
from PIL import Image, ImageDraw
from imageProcessing import ImageConversions
equal_path = './Equations/'
equal_result_path = './Equations/res/'
equal_boxed_path = './Equations/boxed/'
AllSymbols = []  # Global list of objects for symbols
class Symbol:
    character = ''
    position = -1
    isSquare = False
    isSupScript = False
    isMinus = False
    isVerticalBar = False
    isDot = False
    isDivide=False
    isNominator=False
    isdenominator=False
    isNominatorFirst=False
    isNominatorLast=False
    isdenominatorLast=False
    isdenominatorFirst=False

    height = 1
    width = 1
    (centerX, centerY) = (1, 1)
    (x, y) = (1, 1)
    def info(self):
        print('Character ', self.character)
        print('position ', self.position)
        print('isSquare ', self.isSquare)
        print('isMinus ', self.isMinus)
        print('isVerticalBar ', self.isVerticalBar)
        print('isDot ', self.isDot)
        print('height ', self.height)
        print('width ', self.width)
        print('Center x & y ', self.centerX, self.centerY)
        print('x & y ', self.x, self.y)
    def hwRatio(self):
        return self.height/self.width
    # def setSquare(self):
    #     return self.isSquare
    # def setSupScript(self):
    def setMinus(self):  # - in most cases
        if(self.width > 0 and self.height > 0 and (self.width/self.height > 2.3)):
            self.isMinus = True
        else:
            self.isMinus = False
    def setVerticalBar(self):  # 1 in most cases
        if(self.width > 0 and self.height > 0 and (self.height/self.width > 2)):
            self.isVerticalBar = True
        else:
            self.isVerticalBar = False
    def setDot(self):  # Might change according to test cases
        # print(self.getArea())
        if(self.width > 0 and self.height > 0 and (self.height*self.width < 300)):
            if(self.isMinus==True):
                self.isDot = False
            else:
                self.isDot=True
        else:
            self.isDot = False
    def getArea(self):
        return self.height*self.width
    def getXY(self):
        return (self.x, self.y)
    def setCenter(self):
        self.centerX = int(self.x + (self.width/2))
        self.centerY = int(self.y + (self.height/2))
    def getCenter(self):
        return (self.centerX, self.centerY)
def startSegmentation(preprocessedImage):
    contours = getContours(preprocessedImage)
    res = getPositionInformationOfContours(preprocessedImage, contours)
    res.sort()
    AllSymbols.clear()
    makeSymbols(res)
    checkDivide()
    checkEqual2()
    AllSymbols.sort(key=lambda x: x.position, reverse=False)

    checkSquare()
    # checkEqual()
    return AllSymbols
def checkEqual():
    for i in range(len(AllSymbols)-1):
        # print(AllSymbols[i].info())
        if(AllSymbols[i].isMinus == True and AllSymbols[i+1].isMinus == True):
            # print(AllSymbols[i].position)
            AllSymbols[i].character = '='
            AllSymbols[i+1].position = -1
            AllSymbols[i].x = min(AllSymbols[i].x, AllSymbols[i+1].x)
            AllSymbols[i].y = min(
                (AllSymbols[i].y), (AllSymbols[i+1].y))
            AllSymbols[i].height = max(((AllSymbols[i+1].y + AllSymbols[i+1].height) - AllSymbols[i].y),
                                       (AllSymbols[i].y-(AllSymbols[i+1].y + AllSymbols[i+1].height)))
            AllSymbols[i].width = max(AllSymbols[i+1].x+AllSymbols[i+1].width -
                                      AllSymbols[i].x, AllSymbols[i].x-AllSymbols[i+1].x+AllSymbols[i+1].width)
            AllSymbols[i].setCenter()
            # print(AllSymbols[i].info())

def checkDivide():
    center=[]
    Up=[]
    Down=[]
    positions=[]
    # Lowest
    # Highest
    
    for i in range(len(AllSymbols)):
        if(AllSymbols[i].isMinus == True):

            positions.clear();
            Up.clear();
            Down.clear();

            x1=AllSymbols[i].x
            x2=AllSymbols[i].x+AllSymbols[i].width
            positions.append(AllSymbols[i].position)
            for j in range(len(AllSymbols)):
                if(x1<AllSymbols[j].centerX and AllSymbols[j].centerX<x2):
                    if(AllSymbols[j].centerY<AllSymbols[i].centerY):
                        Up.append(tuple((AllSymbols[j].centerX,j)))
                        positions.append(AllSymbols[j].position)
                    elif(AllSymbols[j].centerY>AllSymbols[i].centerY):
                        Down.append(tuple((AllSymbols[j].centerX,j)))
                        positions.append(AllSymbols[j].position)

            if(Up and Down):
                # print('positions',positions)
                Lowest=min(positions)
                Highest=max(positions)
                # print('Lowest',Lowest)
                # print('Highest',Highest)

                # Up.sort(key=lambda x: x.centerX, reverse=False)
                # Down.sort(key=lambda x: x.centerX, reverse=False)
                Up.sort(key = operator.itemgetter(0))
                Down.sort(key = operator.itemgetter(0))

                count=0
                for a in Up:
                    # print(AllSymbols[a].centerX,AllSymbols[a].centerY)
                    # print('Up',a[0],a[1])
                    if(count==0):
                        AllSymbols[a[1]].isNominatorFirst=True
                    AllSymbols[a[1]].position=Lowest+count
                    AllSymbols[a[1]].isNominator=True
                    count+=1
                AllSymbols[a[1]].isNominatorLast=True
                AllSymbols[i].position=Lowest+count
                AllSymbols[i].isDivide=True
                # print(AllSymbols[i].centerX,AllSymbols[i].centerY)
                count+=1
                count2=0
                for b in Down:
                    # print(AllSymbols[b].centerX,AllSymbols[b].centerY)
                    # print('down',b[0],b[1])
                    if(count2==0):
                        AllSymbols[b[1]].isdenominatorFirst=True
                        count2+=1
                    AllSymbols[b[1]].position=Lowest+count
                    AllSymbols[b[1]].isdenominator=True
                    count+=1
                AllSymbols[b[1]].isdenominatorLast=True
def checkEqual2():
    for i in range(len(AllSymbols)-1):
            if(AllSymbols[i].isMinus == True and AllSymbols[i+1].isMinus == True):
                x1=AllSymbols[i].x
                x2=AllSymbols[i].x+AllSymbols[i].width
                x3=AllSymbols[i+1].x
                x4=AllSymbols[i+1].x+AllSymbols[i+1].width
                ans=giveEqualPositions(x1,x2,x3,x4)
                ans2=giveEqualPositions(x3,x4,x1,x2)
                if(ans==True or ans2==True):
                    AllSymbols[i].character = '='
                    AllSymbols[i+1].position = -1
                    AllSymbols[i].x = min(AllSymbols[i].x, AllSymbols[i+1].x)
                    AllSymbols[i].y = min(
                        (AllSymbols[i].y), (AllSymbols[i+1].y))
                    AllSymbols[i].height = max(((AllSymbols[i+1].y + AllSymbols[i+1].height) - AllSymbols[i].y),
                                            (AllSymbols[i].y-(AllSymbols[i+1].y + AllSymbols[i+1].height)))
                    AllSymbols[i].width = max(AllSymbols[i+1].x+AllSymbols[i+1].width -
                                            AllSymbols[i].x, AllSymbols[i].x-AllSymbols[i+1].x+AllSymbols[i+1].width)
                    AllSymbols[i].setCenter()
                
def giveEqualPositions(x1,x2,x3,x4):
    if(x1>=x3 and x2>=x4 and x4>x1):
        return True
    elif(x1<=x3 and x2<=x4 and x3<x2):
        return True
    elif(x1>x3 and  x2<x4):
        return True
    elif(x1<x3 and x4<x2):
        return True
    
    return False
def checkSquare():
    for i in range(len(AllSymbols)-1):
        wid = float(AllSymbols[i].height/2.25)
        diff = AllSymbols[i].centerY-AllSymbols[i+1].centerY
        # print(AllSymbols[i].position,diff,wid)
        # print(AllSymbols[i].isMinus)
        # print(AllSymbols[i].isDot)
        if(diff > wid and AllSymbols[i].isMinus == False and AllSymbols[i].isDivide == False and AllSymbols[i].isDot == False):
            # print('square hobe',AllSymbols[i+1].position)
            AllSymbols[i+1].isSquare = True
        diff = AllSymbols[i+1].centerY-AllSymbols[i].centerY
        # print(diff,wid)
        if(diff > wid and AllSymbols[i].isMinus == False and AllSymbols[i].isDivide == False and AllSymbols[i].isDot == False):
            AllSymbols[i+1].isSupScript = True
def makeSymbols(results):
    count = 0
    for i in results:
        sym = Symbol()
        sym.position = count
        count += 1
        sym.x = i[0][0]
        sym.y = i[0][1]
        sym.width = i[1][0]-i[0][0]
        sym.height = i[1][1]-i[0][1]
        sym.setCenter()
        sym.setMinus()
        sym.setDot()
        sym.setVerticalBar()
        AllSymbols.append(sym)
def getContours(img):
    contours, hierarchy = cv2.findContours(
        img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    return contours
def getPositionInformationOfContours(img, contours):
    # c=img
    # c=ImageConversions().graytobgr(c)
    res = []
    for cnt in contours:
        x, y, w, h = cv2.boundingRect(cnt)
        # cv2.rectangle(c,(x,y),(x+w,y+h),(0,255,240),2)
        # print(x,y,w,h)
        res.append([(x, y), (x+w, y+h)])
    # print(len(contours))
    # ImageConversions().plotImageUsingCV(c)
    return res
