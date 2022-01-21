import pymysql

############### CONFIGURAR ESTO ###################
# Abre conexion con la base de datos
#db = pymysql.connect("localhost","root","","proyectob")
db = pymysql.connect( host='localhost', user= 'root', passwd='', db='tesisb' )
##################################################

# prepare a cursor object using cursor() method
cursor = db.cursor()




cursor.execute( "SELECT teclado FROM data" )
for tecla2 in cursor.fetchall() :
    tecla = ''.join(tecla2)
print(tecla)     
x=input()


cursor.execute( "SELECT mouse FROM data" )
characters = "\r\n"
for movimiento2 in cursor.fetchall() :

    movimiento = ''.join(movimiento2)
    for x in range(len(characters)):
        movimiento = movimiento.replace(characters[x],"")
# desconecta del servidor
with open(r"C:\xampp\htdocs\ProyectoB\textFiles\Output.txt", "w") as text_file:
    text_file.write(movimiento)
db.close()