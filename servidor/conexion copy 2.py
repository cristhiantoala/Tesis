import pymysql

############### CONFIGURAR ESTO ###################
# Abre conexion con la base de datos
#db = pymysql.connect("localhost","root","","proyectob")
db = pymysql.connect( host='localhost', user= 'root', passwd='', db='tesisc' )
##################################################

# prepare a cursor object using cursor() method
cursor = db.cursor()

cursor.execute( "SELECT emocion FROM data" )
characters = "\r\n"
for emo2 in cursor.fetchall() :
    emo = ''.join(emo2)
    for x in range(len(characters)):
        emo = emo.replace(characters[x],"")
print(emo2)
input()

cursor.execute( "SELECT teclado FROM data" )
characters = "\r\n"
for tecla2 in cursor.fetchall() :
    tecla = ''.join(tecla2)
    for x in range(len(characters)):
        tecla = tecla.replace(characters[x],"")


cursor.execute( "SELECT mouse FROM data" )
characters = "\r\n"
for movimiento2 in cursor.fetchall() :

    movimiento = ''.join(movimiento2)
    for x in range(len(characters)):
        movimiento = movimiento.replace(characters[x],"")
# desconecta del servidor

#print(emo)

for x in range(len(characters)):
    emo=emo.replace(",",characters)
print (emo)
db.close()

