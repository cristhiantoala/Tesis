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

