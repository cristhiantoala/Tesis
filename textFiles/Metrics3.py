# coding=utf-8
import re
import math
import datetime
import pymysql

############### CONFIGURAR ESTO ###################
# Abre conexion con la base de datos
#db = pymysql.connect("localhost","root","","proyectob")
db = pymysql.connect( host='localhost', user= 'root', passwd='', db='tesis' )
##################################################

# prepare a cursor object using cursor() method
cursor = db.cursor()

cursor.execute( "SELECT emocion FROM data" )
characters = "\r\n"
for emo2 in cursor.fetchall() :
    emo = ''.join(emo2)
    


cursor.execute( "SELECT teclado FROM data" )
characters = "\r\n"
for tecla2 in cursor.fetchall() :
    tecla = ''.join(tecla2)


cursor.execute( "SELECT mouse FROM data" )
characters = "\r\n"
for movimiento2 in cursor.fetchall() :
    movimiento = ''.join(movimiento2)
# desconecta del servidor

db.close()

mouseLogM = []
vel = []
angs = []
lastClick = []
lastPoint = []
distDif = []
clickD = []
distBC = []
logCountM = []
clickTotalM = []
intervaloTemp = 60
saveNum1 = 0  # salvar onde ficou a última iteração
correctNum1 = 0  # boolean só para garantir que retomamos na última posição calculada
saveNum2 = 0
correctNum2 = 0
firstClick = 0
distSlLog = -1
logCount = 0
clickTotal = 0
count3 = 0
dateFinal = 0
time2 = 0
timeConvert = 0
num = 0
ang = 0
start1 = 0
start3 = 0
start4 = 0  # diferenciar a primeira iteração
dist = 0
dist2 = 0
dist3 = 0
distSL = 0

# TECLADO
keyLogM = []
leftSideM = []  # M -> Matriz
rigthSideM = []
backSpaceM = []
leftSide = 0
rightSide = 0
backSpace = 0
saveNum3 = 0
correctNum3 = 0
leftSideMatriz = ["§", "±", "1", "2", "3", "4", "5", "!", "#", "@", "€", "$", "%", "Key.tab", "q", "Q", "w", "W", "e", "E", "r", "R", "t", "T",
                  "a", "A", "s", "S", "d", "D", "f", "F", "g", "G", "Key.shift", "Key.caps_lock", "<", ">", "z", "Z", "x", "X", "c", "C", "v", "V", "b", "B", "Key.crtl", "Key.alt", "Key.cmd"]

# STRESS
stressLogM = []
stressLevelM = []
timeGlobal = 0  # Variável Global das iterações, dada pelo stress


regex = re.compile("\d+[-]\d+[-]\d+|\d+[:]\d+[:]\d+[,]\d+|-?\d+[.]\d+|\d+")
lines = emo.split('\n')
#print(lines)
for line in lines:
    result = regex.findall(line)
    stressLevelM.append(result[2])
   # print(stressLevelM)
    stressLogM.append(result)

regex = re.compile(
    "\d+[-]\d+[-]\d+|\d+[:]\d+[:]\d+[,]\d+|-?\d+[.]\d+|\d|\w*Button[.]left|\w*Button[.]right")
lines = movimiento.split('\n')
for line in lines:
    result = regex.findall(line)
    mouseLogM.append(result)

regex = re.compile(
    "\d+\-\d+\-\d+|\d+[:]\d+[:]\d+[,]\d+|[: ] |[a-zA-Z]+[.]?[a-zA-Z]*[_]?[a-zA-Z]*|[0-9]+|[^\n\']|[^\n]+x03")
lines = tecla.split('\n')
for line in lines:
    result = regex.findall(line)
    keyLogM.append(result)
    print(line)
    print(result)
input()

for ite in range(0, len(stressLogM)):
    date2 = datetime.datetime.strptime(
        stressLogM[ite][1], '%H:%M:%S,%f').time()
    timeGlobal = date2.hour * 60 * 60 + date2.minute * \
        60 + date2.second + date2.microsecond / 1000000

    for num, l in enumerate(mouseLogM, start=saveNum1):
        if start1 == 1 and correctNum1 == 1:
            date2 = datetime.datetime.strptime(
                mouseLogM[num][1], '%H:%M:%S,%f').time()
            time2 = date2.hour * 60 * 60 + date2.minute * \
                60 + date2.second + date2.microsecond / 1000000
            #diff = time2 - time1
            # estabelece o intervalo de tempo
            if time2 <= timeGlobal and num != len(mouseLogM)-1:
                logCount += 1
                dist += math.sqrt((float(mouseLogM[num][2]) - float(mouseLogM[num - 1][2]))**2 + (
                    float(mouseLogM[num][3]) - float(mouseLogM[num - 1][3]))**2)
                if mouseLogM[num][2] == "0.0":
                    mouseLogM[num][2] = 0.01
                # math.fabs -> valor absoluto
              #  print(mouseLogM[num][3],"   ",mouseLogM[num][2])
                    ang += math.degrees(math.fabs(math.tan(float(mouseLogM[num][3]) / float(mouseLogM[num][2]))))
            else:  # termina um ciclo de 15seg e inicia outro
                time1 = time2  # guardar o ultimo registo aceite, para iniciar um novo ciclo
                saveNum1 = num
                correctNum1 = 0
                vel.append(dist)
                angs.append(ang)
                logCountM.append(logCount)
                dist = 0
                ang = 0
                logCount = 0
                break
        if start1 == 0:  # primeira iteracao
            vel.append(dist)
            angs.append(ang)
            logCountM.append(logCount)
            dist = 0
            ang = 0
            logCount = 0
            start1 = 1
            break
        if correctNum1 == 0:
            num = saveNum1
            correctNum1 = 1

    for num, l in enumerate(mouseLogM, start=saveNum2):
        if start3 == 1 and correctNum2 == 1:
            date2 = datetime.datetime.strptime(
                mouseLogM[num][1], '%H:%M:%S,%f').time()
            time2 = date2.hour * 60 * 60 + date2.minute * \
                60 + date2.second + date2.microsecond / 1000000
            # estabelece o intervalo de tempo
            if time2 <= timeGlobal and num != len(mouseLogM)-1:
                if firstClick == 1:  # iniciar o somatório após o primeiro click
                    dist2 += math.sqrt((float(mouseLogM[num][2]) - float(lastPoint[2])) ** 2 + (float(
                        mouseLogM[num][3]) - float(lastPoint[3])) ** 2)  # somatório das distâncias todas entre dois cliques
                    # guardar o anterior para fazer a soma
                    lastPoint = mouseLogM[num]
                if len(mouseLogM[num]) > 4:  # significa que fez um clique
                    distSlLog += 1
                    clickTotal += 1
                    if distSlLog == 0:  # guardar o primeiro registo, só precisa de entrar 1x
                        print("ENTREIIEIEIEIEI")
                        lastClick = l
                        date = datetime.datetime.strptime(
                            l[1], '%H:%M:%S,%f').time()
                        time3 = date.hour * 60 * 60 * 1000 + date.minute * 60 * \
                            1000 + date.second * 1000 + date.microsecond/1000
                        distSlLog += 1
                    if distSlLog == 2:  # sempre que houver um click entra aqui, só no primeiro é que não
                        distSL += math.sqrt((float(mouseLogM[num][2]) - float(lastClick[2]))**2 + (float(
                            mouseLogM[num][3]) - float(lastClick[3]))**2)  # calculo das distâncias entre dois cliques
                        time2 = datetime.datetime.strptime(
                            mouseLogM[num][1], '%H:%M:%S,%f').time()
                        timeConvert = time2.hour * 60 * 60 * 1000 + time2.minute * 60 * 1000 + \
                            time2.second * 1000 + time2.microsecond/1000  # to miliseconds
                        dateFinal += timeConvert - time3
                        lastClick = l
                        time3 = timeConvert
                        distSlLog = 1
                    if count3 == 1:
                        dist3 += dist2
                        dist2 = 0
                        count3 = 0
                    if count3 == 0:
                        lastPoint = mouseLogM[num]
                        count3 = 1  # para no segundo click determinar a distância
                        firstClick = 1  # começa a somar
            else:  # termina um ciclo e inicia outro
                # verificar o distDif, aparenta nao estar totalmente correto
                distDif.append(math.fabs(dist3 - distSL))
                clickD.append(dateFinal)
                clickTotalM.append(clickTotal)
                count2 = -1
                correctNum2 = 0
                saveNum2 = num
                dateFinal = 0
                distSL = 0
                clickTotal = 0
                dist3 = 0
                break
        if start3 == 0:  # primeira iteracao
            distDif.append(dist3 - distSL)
            clickD.append(dateFinal)
            clickTotalM.append(clickTotal)
            dateFinal = 0
            distSL = 0
            clickTotal = 0
            dist3 = 0
            start3 = 1
            break

        if correctNum2 == 0:
            num = saveNum2
            correctNum2 = 1
    aux=(len(keyLogM))
    print(aux)
    for num, l in enumerate(keyLogM, start=saveNum3):
        if start4 == 1 and correctNum3 == 1 and num<aux:
            date2 = datetime.datetime.strptime(str(keyLogM[num-1][2]), '%H:%M:%S,%f').time()
            #print(date2,"+",num-1)
            time2 = date2.hour * 60 * 60 + date2.minute * \
				60 + date2.second + date2.microsecond / 1000000
            # estabelece o intervalo de tempo, para gravar o último caso
            if time2 <= timeGlobal and num != len(keyLogM)-1:
                if keyLogM[num][4] == "Key.backspace":
                    backSpace += 1
                if leftSideMatriz.__contains__(keyLogM[num][4]):
                    leftSide += 1
                else:
                    rightSide += 1
            else:  # termina um ciclo e inicia outro
                # nº medio de teclas usadas do ld direito
                rigthSideM.append(rightSide)
                # nº medio de teclas usadas do ld esq
                leftSideM.append(leftSide)
                backSpaceM.append(backSpace)
                saveNum3 = num
                correctNum3 = 0
                rightSide = 0
                leftSide = 0
                backSpace = 0
                if keyLogM[num][4] == "Key.backspace":  # iteração inicial
                    backSpace += 1
                if leftSideMatriz.__contains__(keyLogM[num][4]):
                    leftSide += 1
                else:
                    rightSide += 1
                break
        if start4 == 0:  # primeira iteração
            start4 = 1
            if keyLogM[num][4] == "Key.backspace":
                backSpace += 1
            if leftSideMatriz.__contains__(keyLogM[num][4]):
                leftSide += 1
            else:
                rightSide += 1
            # nº medio de teclas usadas do ld direito
            rigthSideM.append(rightSide)
            leftSideM.append(leftSide)  # nº medio de teclas usadas do ld esq
            backSpaceM.append(backSpace)
            rightSide = 0
            leftSide = 0
            backSpace = 0
            break
        if correctNum3 == 0:
            num = saveNum3
            correctNum3 = 1
#velocity,angles,logCount,distStraighLine,clickDuration,clickTotal,distBetweenClick,backSpace,leftSide,rightSide,stressLevel

print("--Mouse--")
print("LogCount "+str(len(logCountM)))
print("Velocidad " + str(len(vel)))
print("Ángulo " + str(len(angs)))
print("DistDif " + str(len(distDif)))  # Distance of Mouse to the Straight Line
print("ClickD " + str(len(clickD)))  # Click duration
#EN DONDE APARECE METRICS.CSV
#print("Distancia entre clic "+str(len(distBC))) #distBetweenClick
print("ClickTotalM " + str(len(clickTotalM)))
print("--Teclado--")
print("BackSpace " + str(len(backSpaceM)))
print("LeftSide " + str(len(leftSideM)))
print("RightSide " + str(len(rigthSideM)))
print("EmotionLevel " + str(len(stressLevelM)))



f = open(r'C:\xampp\htdocs\ProyectoB\textFiles\metricsNewtest.txt', "a")
for l in range(0, len(vel)):
    f.write(str(vel[l])+' '+str(angs[l])+' '+str(logCountM[l])+' '+str(distDif[l])+' '+str(clickD[l])+' '+str(
        clickTotalM[l])+' '+str(backSpaceM[l])+' '+str(leftSideM[l])+' '+str(rigthSideM[l])+' '+str(stressLevelM[l])+'\n')
f.close()
print ("Terminamos")