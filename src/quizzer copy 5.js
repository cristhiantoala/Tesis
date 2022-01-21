// inicializamos un array de arrays con la preguntas del juego. 
var questionsopt = [
	[
		"¿En un microordenador tipo PC equipado con Microsoft Windows, el juego de teclas que permite iniciar el proceso de apagado del equipo son?",
		"Ctrl + Alt + Supr",
		"Ctrl + SHIFT",
		"Ctrl + C",
		"Ninguno de los anteriores",
		0
	],
	[
		"¿Cuál de los siguientes prefijos define una mayor cantidad de bytes?",
		"Mega",
		"Kilo",
		"Tera",
		"Ninguno de los anteriores",
		2
	],
	[
		"¿En Internet el servicio que permite establecer una comunicación mediante texto escrito con otro interlocutor a través de una conexión con un servidor, se denomina?",
		"URL",
		"IRC o Chat",
		"FTP",
		"Ninguno de los anteriores",
		1
	],
	[
		"¿Un conjunto de 1024 Megabytes corresponde a?",
		"1 TERA",
		"1 GIGA",
		"100 BYTES",
		"Ninguno de los anteriores",
		1
	],
	[
		"¿Con cuantas papeleras de reciclaje cuenta MS Windows?",
		"UNA",
		"TRES",
		"UNA POR DISCO DURO",
		"Ninguno de los anteriores",
		2
	],
	[
		"¿Que es un host?",
		"Un dominio",
		"Un puerto del ordenador mediante el cual puedes conectar varios dispositivos",
		"Un PC conectado a una red con una IP asignada",
		"Ninguno de los anteriores",
		2
	],

	[
		"¿Desde dónde se puede modificar las propiedades de pantalla en Windows?",
		"Desde el escritorio.",
		"Desde el Panel de Control",
		"Ambas son correctas",
		"Ninguno de los anteriores",
		2
	],
	[
		"¿Cual de éstas es una herramienta de sistema propia de las que incorpora MS Windows?",
		"La calculadora",
		"El desfragmentador",
		"Excel",
		"Ninguno de los anteriores",
		1
	],
	[
		"El sistema operativo es:",
		"El software almacenado en el hardware.",
		"Un conjunto de programas que se encarga de controlar la computadora.",
		"La forma de almacenar datos.",
		"La unidad elemental de información.",
		1
	],
	[
		"¿Se puede recuperar un archivo borrado?",
		"No.",
		"Si, mediante una utilidad del sistema operativo.",
		"Si, después de vaciar la papelera de reciclaje.",
		"Si, utilizando la papelera de reciclaje.",
		3
	],
		[
		"¿Cuáles de las siguientes opciones son barras de menú específicas que tiene Excel?",
		"La barra de símbolos de Excel.",
		"La barra de herramientas estándar.",
		"La barra de panel de tareas.",
		"Ninguna de las anteriores.",
		1
	],
		[
		"Cuando realizamos dibujos y hacemos edición de imágenes en la computadora lo podemos hacer con algunos de estos programas, ¿Cuáles son?",
		"Paint.",
		"Fireworks.",
		"Photoshop.",
		"Todas las anteriores.",
		3
	],	
		[
		"Menciona que son los elementos de entrada a un computador",
		"Son programas en espera al ser ejecutados.",
		"Son los que permiten dar entrada al CPU.",
		"Son los que te permiten abrir internet.",
		"Google, Yahoo, Gmail.",
		1
	],
		[
		"Barra de tareas",
		"Es la barra situada en la parte superior de la ventana.",
		"Es la barra situada en la parte central de la ventana.",
		"Es la barra situada en la parte inferior de la pantalla.",
		"Es la barra situada en la parte superior de la pantalla.",
		2
	],	
		[
		"Indique ¿Cuál es la combinación de teclas que sirve para cerrar una ventana?",
		"ALT+F4",
		"CTL+ALT+Z",
		"ENTER",
		"ALT+SHIFT",
		0
	],	
		[
		"En Excel la fórmula que permite sumar los valores desde la celda A! hasta la celda A33 es",
		"=(A1:A33)",
		"=SUMA(A1:A33)",
		"SUMA(A1:A33)",
		"=SUMA(A1+A33)",
		1
	],	
		[
		"Cuando abrimos Word que menú es el que nos aparece inicialmente?",
		"Archivo.",
		"Inicio.",
		"Herramientas.",
		"Edición.",
		1
	],	
		[
		"¿Para poder mover los márgenes de Izq-Der que herramientas ocupamos?",
		"Reglas.",
		"Regla vertical.",
		"Sangría.",
		"Espaciado.",
		2
	],	
		[
		"¿Cómo se les llaman a los atributos que tiene un documento?",
		"Estilo.",
		"Formato.",
		"Fuentes.",
		"Tema.",
		0
	],	
		[
		"¿Con que herramientas podemos hacer que una palabra sobresalga del demás texto?",
		"Resaltado o negrita.",
		"Sombreado.",
		"Cambio de color.",
		"Borde.",
		0
	],	
		[
		"¿Las opciones de Negritas, Cursivas, Subrayado, Tachado, Tamaño, ¿etc., Como se la conoce a todas esas herramientas?",
		"Herramientas de Edición.",
		"Herramientas de Fuente.",
		"Herramienta de Formato.",
		"Herramienta de Buscar.",
		1
	],	
		[
		"¿Teniendo 4 párrafos queremos alinear el texto, centrarlo, moverlo, etc., que herramienta nos ayudaría?",
		"Herramientas de Inicio.",
		"Herramientas de Fuente.",
		"Herramienta de Buscar.",
		"Herramienta de Párrafo.",
		3
	],	
		[
		"¿Qué combinación de teclas me permite copiar un documento?",
		"CTRL+B",
		"CTRL+SHIFT",
		"CTRL+C",
		"CTRL+T",
		2
	],	
		[
		"¿Qué combinación de teclas me permite pegar el contenido copiado?",
		"CTRL+V",
		"CTRL+P",
		"CTRL+C",
		"CTRL+Z",
		0
	],	
		[
		"Que botón me despliega todos los programas que están instalados en la maquina",
		"Inicio.",
		"Todos los programas.",
		"Panel de tareas.",
		"Restaurar.",
		0
	],	
		[
		"¿Para poder crear espacios más amplios entre líneas y líneas que herramienta ocupamos?",
		"Marcas.",
		"Espaciado.",
		"Interlineado.",
		"Sangrías.",
		2
	],	
		[
		"Todos los equipos deben tener",
		"Procesador de textos.",
		"Un sistema operativo.",
		"Una impresora conectada.",
		"Navegador.",
		1
	],	
		[
		"¿Que extensión tiene los documentos que se realizan en Word?",
		".PDF",
		".TXT",
		".JPG",
		".DOC/DOCX",
		3
	],	
		[
		"La unidad donde se insertan los CDs se denomina",
		"Disquera.",
		"Impresora.",
		"Lector CD/DVD.",
		"Lector USB.",
		2
	],	
		[
		"¿Qué terminación tiene aquellos archivos realizados con el Excel?",
		".Exc",
		".Xlt",
		".Xls",
		".Xlc",
		2
	],	
		[
		"¿Qué es Excel?",
		"Una página Web.",
		"Un programa para Linux.",
		"Un programa para realizar hojas de cálculos.",
		"Un fichero de texto.",
		2
	],	
		[
		"Qué teclas debes utilizar para seleccionar todo en Windows",
		"CTRL+B",
		"CTRL+A",
		"CTRL+E",
		"CTRL+T",
		2
	],	
		[
		"¿Qué es un hipervínculo?",
		"Un lenguaje de programación.",
		"Un enlace.",
		"Un compilador.",
		"Un editor de fotos.",
		1
	],	
		[
		"El sistema de numeración que solo utiliza dos dígitos, 0 y 1, ¿se llama el sistema de numero?",
		"decimal.",
		"Hexadecimal.",
		"Binario.",
		"Octal.",
		2
	],	
		[
		"El termino _________ se refiere a componentes físicos de la computadora, como el monitor, el teclado, la memoria y el disco duro.",
		"Firmware.",
		"Salida.",
		"Hardware.",
		"Software.",
		2
	],	
		[
		"Los computadores constan de 2 componentes básicos los cuales son:",
		"Pantalla y monitor.",
		"Hardware y Software.",
		"Internet y CPU.",
		"Hard drive pendrive.",
		1
	],
		[
		"¿Cómo se le llama a la hoja que usamos en Word?",
		"Hoja de Cálculo.",
		"Página.",
		"Diapositiva.",
		"Cuadro.",
		1
	],	
		[
		"Es un editor de presentaciones donde se integran textos, gráficos, imágenes, plantillas, animaciones, efectos de sonido y video",
		"Word.",
		"Access.",
		"Excel.",
		"Power Point.",
		3
	],	
		[
		"¿Qué nombre recibe la hoja usada en Power Point?",
		"Hoja de Cálculo.",
		"Página.",
		"Diapositiva.",
		"Cuadro.",
		2
	],	
		[
		"¿En Power Point como nombramos al archivo que hacemos?",
		"Hoja de Cálculo.",
		"Documento.",
		"Presentacion.",
		"Libro de trabajo.",
		2
	],	
		[
		"¿Cómo se llama a cada uno de los espacios que tenemos en Excel para escribir contenido en ellas?",
		"Celda.",
		"Rectángulo.",
		"Cuadrado.",
		"Espacio.",
		0
	],	
		[
		"Es un conjunto de redes de comunicación con servicios como el envío de correo electrónico, la transmisión de archivos, las conversaciones en línea, la mensajería instantánea, la transmisión de contenido y comunicación multimedia.",
		"Red social.",
		"Word.",
		"Correo electrónico.",
		"Internet.",
		3
	],	
		[
		"Es una estructura social compuesta por un conjunto de individuos u organizaciones que están relacionados en lo profesional, amistad, parentesco.",
		"Red social.",
		"Word.",
		"Correo electrónico.",
		"Internet.",
		0
	],	
		[
		"Es un servicio de red que permite a los usuarios enviar y recibir mensajes (también denominados mensajes electrónicos o cartas digitales) mediante redes de comunicación electrónica.",
		"Red social.",
		"Word.",
		"Correo electrónico.",
		"Internet.",
		2
	],	
		[
		"En Power Point que pestaña nos permite dar un cambio de movimiento a toda la diapositiva",
		"Transiciones.",
		"Diseño.",
		"Inicio.",
		"Revisar.",
		0
	],	
		[
		"En Power Point que pestaña nos permite dar movimiento solo a texto e imágenes",
		"Revisar.",
		"Animaciones.",
		"Inicio.",
		"Diseño.",
		1
	],	
		[
		"En Power Point que pestaña nos permite agregar imágenes, tablas y gráficos",
		"Revisar.",
		"Insertar.",
		"Inicio.",
		"Diseño.",
		1
	],	
		[
		"El archivo que creamos en Excel es:",
		"Hoja de Cálculo.",
		"Documento.",
		"Presentación.",
		"Libro de trabajo.",
		3
	],	
		[
		"¿En Word cómo se le llama al tipo de letra que utilizamos?",
		"Fuente.",
		"Letra.",
		"Palabras.",
		"Texto.",
		0
	],	
		[
		"¿Qué podemos crear en Word?",
		"Presupuestos.",
		"Presentaciones.",
		"Juegos.",
		"Cartas.",
		3
	],	
		[
		"El área de trabajo en Excel está conformado por:",
		"Columnas, Filas y Celdas.",
		"Columnas, Páginas y Cuadros de Texto.",
		"Columnas, Párrafos y Celdas.",
		"Cuadros, Filas y Celdas.",
		0
	],	
		[
		"¿Cuál de las siguientes opciones corresponde a tipos de Sistemas Operativos Existentes?",
		"Office, Word, Excel.",
		"Mother Board, Mouse, Teclado.",
		"Windows, Mac Os, Linux.",
		"Internet, Servidor, Conexión FTP.",
		2
	],	
		[
		"¿Qué programa utilizamos para escribir cartas?",
		"Word.",
		"Excel.",
		"Chrome.",
		"Power Point.",
		0
	],	
		[
		"¿Cuál de los siguientes dispositivos es apropiado para almacenar información?",
		"Memoria RAM.",
		"Disco Duro.",
		"Memoria Secundaria.",
		"Condensador.",
		1
	],	
		[
		"¿Cuál de las siguientes extensiones se crea un archivo comprimido en el sistema operativo Windows?",
		".rar",
		".zip",
		".hqx",
		"Todas las anteriores.",
		3
	],	
		[
		"Los programas usados para tener acceso a páginas web y desplegarlas se llaman:",
		"Sitios Web.",
		"Ventanas Web.",
		"Documentos Web.",
		"Exploradores Web.",
		3
	],	
		[
		"Las tres primeras pestañas de la ventana de Power Point son:",
		"Inicio, Insertar y Diseño.",
		"Inicio, Animación y Presentación de diapositiva.",
		"Inicio, Animación y Revisar.",
		"Inicio, Diseño, Presentación de diapositiva.",
		2
	],	
		[
		"El error #¡VALOR! En una formula en Excel Significa",
		"Excel no reconoce el texto de la fórmula, por lo que no puede realizar la operación matemática.",
		"Especifica una intersección de dos áreas que no se interceptan.",
		"Función o fórmula no disponible en Excel.",
		"No encuentra el valor de resultado de la formula.",
		0
	]	
];

var questions = [
	[
		"¿En un microordenador tipo PC equipado con Microsoft Windows, el juego de teclas que permite iniciar el proceso de apagado del equipo son?",
		"Ctrl + Alt + Supr",
		"Ctrl + SHIFT",
		"Ctrl + C",
		"Ninguno de los anteriores",
		0
	],
	[
		"¿Cuál de los siguientes prefijos define una mayor cantidad de bytes?",
		"Mega",
		"Kilo",
		"Tera",
		"Ninguno de los anteriores",
		2
	],
	[
		"¿Como te estas sintiendo con el test?",
		"Bien",
		"Normal",
		"Mal",
		2
	],
	[
		"¿En Internet el servicio que permite establecer una comunicación mediante texto escrito con otro interlocutor a través de una conexión con un servidor, se denomina?",
		"URL",
		"IRC o Chat",
		"FTP",
		"Ninguno de los anteriores",
		1
	],
	[
		"¿Un conjunto de 1024 Megabytes corresponde a?",
		"1 TERA",
		"1 GIGA",
		"100 BYTES",
		"Ninguno de los anteriores",
		1
	],
	[
		"¿Como te estas sintiendo con el test?",
		"Bien",
		"Normal",
		"Mal",
		2
	],
	[
		"¿Con cuantas papeleras de reciclaje cuenta MS Windows?",
		"UNA",
		"TRES",
		"UNA POR DISCO DURO",
		"Ninguno de los anteriores",
		2
	],
	[
		"¿Que es un host?",
		"Un dominio",
		"Un puerto del ordenador mediante el cual puedes conectar varios dispositivos",
		"Un PC conectado a una red con una IP asignada",
		"Ninguno de los anteriores",
		2
	],
	[
		"¿Como te estas sintiendo con el test?",
		"Bien",
		"Normal",
		"Mal",
		2
	],
	[
		"¿Desde dónde se puede modificar las propiedades de pantalla en Windows?",
		"Desde el escritorio.",
		"Desde el Panel de Control",
		"Ambas son correctas",
		"Ninguno de los anteriores",
		2
	],
	[
		"¿Cual de éstas es una herramienta de sistema propia de las que incorpora MS Windows?",
		"La calculadora",
		"El desfragmentador",
		"Excel",
		"Ninguno de los anteriores",
		1
	],
	[
		"¿Como te estas sintiendo con el test?",
		"Bien",
		"Normal",
		"Mal",
		2
	],
	[
		"¿Cual es la diferencia entre Hardware y Software?",
		1
	],
	[
		"¿Que tal se sintió durante el test?",
		1
	],
	[
		"¿Sobre cual tema tiene mas conocimiento?",
		1
	],
	[
		"¿Como te estas sintiendo con el test?",
		"Bien",
		"Normal",
		"Mal",
		2
	]
];

// Aquí utilizamos UnderscoreJS para generar un template de pregunta.
var questionTemplate = _.template(" \
	<div class='card question'><span class='question'><%= question %></span> \
      <ul class='options'> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='0' id='q<%= index %>o1'> \
          <label for='q<%= index %>o1'><%= a %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2'> \
          <label for='q<%= index %>o2'><%= b %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='2' id='q<%= index %>o3'> \
          <label for='q<%= index %>o3'><%= c %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='3' id='q<%= index %>o4'> \
          <label for='q<%= index %>o4'><%= d %></label> \
        </li> \
      </ul> \
    </div> \
    ");
	var questionTemplatetxt1 = _.template(" \
	<div class='card question'><span class='question'><%= question %></span> \
	<ul class='optionss'> \
	<li> \
          <textarea name='txtRes' id='txt_Res1'> </textarea> \
		  </li> \
		<ul class='options'> \
        <li id='texto'> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2' > \
          <label for='q<%= index %>o2'><%= b %>Aceptar</label> \
        </li> \
      </ul> \
    </div> \
    ");
	var questionTemplatetxt2 = _.template(" \
	<div class='card question'><span class='question'><%= question %></span> \
	<ul class='optionss'> \
	<form name='frmu' id='frm'>\
	<li> \
          <textarea name='txtRes' id='txt_Res2'> </textarea> \
		  </li> \
		<ul class='options'> \
        <li id='texto2'> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2' > \
          <label for='q<%= index %>o2'><%= b %>Aceptar</label> \
        </li> \
      </ul> \
    </div> \
    ");
	var questionTemplatetxt3 = _.template(" \
	<div class='card question'><span class='question'><%= question %></span> \
	<ul class='optionss'> \
	<form name='frmu' id='frm'>\
	<li> \
          <textarea name='txtRes' id='txt_Res3'> </textarea> \
		  </li> \
		<ul class='options'> \
        <li id='texto3'> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2' > \
          <label for='q<%= index %>o2'><%= b %>Aceptar</label> \
        </li> \
      </ul> \
    </div> \
    ");

	var questionTemplate3 = _.template(" \
	<div class='card question'><span class='question'><%= question %></span> \
      <ul class='options'> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='0' id='q<%= index %>o1'> \
          <label for='q<%= index %>o1'><%= a %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2'> \
          <label for='q<%= index %>o2'><%= b %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='2' id='q<%= index %>o3'> \
          <label for='q<%= index %>o3'><%= c %></label> \
        </li> \
      </ul> \
    </div> \
    ");

// Definimos las variables de estado del juego y los valores iniciales (como el tiempo de respuesta de cada pregunta).
var points,
	pointsPerQuestion,
	currentQuestion,
	questionTimer,
	timeForQuestion = 30, // segundos
	timeLeftForQuestion; 
var arrayAleatorio= [];
// Manipulacion de elementos con JQuery.
$(function() {

	// Uso de jQuery para escuchar el evento click del botón de Comenzar y Volver a jugar.
	$('button.start').click(start);

	// La función restart inicializa los valores de las variables de estado del juego.
	function restart() {
		points = 0;
		pointsPerQuestion = 8;
		currentQuestion = 0;
		timeLeftForQuestion = timeForQuestion;
	// Se oculta la pantalla de finalizar y un mensaje que dice "Se acabó el tiempo".
		$('.finish.card').hide();
		$('div.start').show();
		$('.times_up').hide();

		generateCards();
		//updateTime();
		updatePoints();
	}

	//  La función start se ejecuta cuando el jugador hace click en comenzar.
	function start() {
		$('div.start').fadeOut(200, function() {
			moveToNextQuestion();
		});
	}

	
	
	function randonQuestion(){
		var cantidadNumeros = 8;
		while(arrayAleatorio.length < cantidadNumeros ){
			var numeroAleatorio = Math.ceil(Math.random()*8);
			var existe = false;
			for(var i=0;i<arrayAleatorio.length;i++){
				if(arrayAleatorio [i] == numeroAleatorio){
					existe = true;
					break;
				}
			}
			if(!existe){
				arrayAleatorio[arrayAleatorio.length] = numeroAleatorio;
			}

		}
	}
	// Esta es una de las funciones clave del juego, encargada de generar las preguntas. 
	function generateCards() {
		randonQuestion()
		alert(arrayAleatorio)
		$('.questions').html('');

		for (var i = 0; i < 7; i++) {
			for(var j=0;j<arrayAleatorio.length;j++){
				var numeroAleatorio= arrayAleatorio[j]
				if (i<8){
					
					var q = questionsopt[numeroAleatorio];
					console.log(q)
					var html = questionTemplate({
						question: q[0],
						index: i,
						a: q[1],
						b: q[2],
						c: q[3],
						d: q[4]
					});
			}
		}
			/*if (i==12){
				var q = questions[i];
				var html = questionTemplatetxt1({
					question: q[0],
					index: i,
					a: q[1],
					b: q[2],
				});
			}
			else if (i==13){
				var q = questions[i];
				var html = questionTemplatetxt2({
					question: q[0],
					index: i,
					a: q[1],
					b: q[2],
				});
			}
			else if (i==14){
				var q = questions[i];
				var html = questionTemplatetxt3({
					question: q[0],
					index: i,
					a: q[1],
					b: q[2],
				});
			}
			else if(i==2 || i==5 || i==8 || i==11 || i==15){
				var q = questions[i];
				var html = questionTemplate3({
					question: q[0],
					index: i,
					a: q[1],
					b: q[2],
					c: q[3]
				});
			}
			else{
				var q = questionsopt[i];
				var html = questionTemplate({
					question: q[0],
					index: i,
					a: q[1],
					b: q[2],
					c: q[3],
					d: q[4]
				});
			}*/
			$('.questions').append(html);
		};

                // Indicamos que nos interesa el evento change de los inputs dentro de los elementos con clase question y card (cada una de las preguntas).
		$('.question.card input').change(optionSelected);
		$('#texto').mouseover(optionFocus)
		$('#texto2').mouseover(optionFocus)
		$('#texto3').mouseover(optionFocus)
	}

	// Esta función cambia el estado del juego para pasar de una pregunta a la siguiente.
	function moveToNextQuestion() {
		currentQuestion += 1;
		if (currentQuestion > 1) {
			$('.question.card:nth-child(' + (currentQuestion-1) + ')').hide();
		}
		if (currentQuestion==2 || currentQuestion==5 || currentQuestion==8 || currentQuestion==11|| currentQuestion==15)
		{	
			var body=$("body")
			body.css("background-color","black")
		}

		// Se muestra la siguiente pregunta.
		showQuestionCardAtIndex(currentQuestion);

	}
	// Esta función inicializa el temporizador para responder una pregunta.
	/*function setupQuestionTimer() {
		if (currentQuestion > 1) {
			clearTimeout(questionTimer);
		}
		timeLeftForQuestion = timeForQuestion;

		// Cada 1 segundo, nuestro temporizador llamará a la función countdownTick(). 
		questionTimer = setTimeout(countdownTick, 1000);
	}*/

	// Mostramos la tarjeta de pregunta correspondiente al índice que la función recibe por parámetro.
	function showQuestionCardAtIndex(index) { // staring at 1
		
		var $card = $('.question.card:nth-child(' + index + ')').show();
	}

	// La función countdownTick() se ejecuta cada un segundo, y actualiza el tiempo restante para responder en la pantalla del jugador.
	/*function countdownTick() {
		timeLeftForQuestion -= 1;
		updateTime();
		if (timeLeftForQuestion == 0) { 
			return finish();
		}
		questionTimer = setTimeout(countdownTick, 1000);
	}*/

	// Actualiza el tiempo restante en pantalla, utilizando la función html(). 
	/*function updateTime() {
		$('.countdown .time_left').html(timeLeftForQuestion + 's');
	}*/

	// Actualiza los puntos en pantalla.
	function updatePoints() {
		$('.points span.points').html(points + ' puntos');
	}


	// Esta función se ejecuta cuando el jugador escoge una respuesta.
	function optionSelected() {
		var aux = currentQuestion-1;
		var aux2 = questions[aux].length;
		var selected = parseInt(this.value);
		var correct = questions[aux][aux2-1];
		
			
		if(aux==2 || aux==5 || aux==8 || aux==11|| aux==15){
			var hoy = new Date();
			var fecha = hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate();
			var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()+ ',' + hoy.getMilliseconds()+":";
			var fechaYHora = fecha + ' ' + hora;
			if (selected==0){
				respuesta=3
			}
			if (selected==1){
				respuesta=2
			}	
			if (selected==2){
				respuesta=1
			}		
			almacenar_respuestas.push(fechaYHora+" "+respuesta)
			var auxalmacenar_respuestas=almacenar_respuestas.join("\\r\\n")
			document.getElementById("respuestas").value = auxalmacenar_respuestas;
		}
		if (selected == correct) {
			points += pointsPerQuestion;
			updatePoints();
			correctAnimation();
		} else {
			wrongAnimation();
		}

		if (currentQuestion == questions.length) {
			clearTimeout(questionTimer);
			return finish();
		}
		moveToNextQuestion();
	}

	function optionFocus() {
		var CQ = currentQuestion-1;
			if (CQ==12)
			{
				var txt=document.getElementById("txt_Res1").value
				//Contar palabras del texto.
				var wordCount = txt.trim().replace(/\s+/gi, ' ').split(' ').length;
				if (wordCount<6)
				{
				alert("Debe insertar al menos 5 palabras")
				}
			}
			if (CQ==13)
			{
				
				var txt=document.getElementById("txt_Res2").value
				//Contar palabras del texto.
				var wordCount = txt.trim().replace(/\s+/gi, ' ').split(' ').length;
				if (wordCount<6)
				{
				alert("Debe insertar al menos 5 palabras")
				}
			}
			if (CQ==14)
			{
				var txt=document.getElementById("txt_Res3").value
				//Contar palabras del texto.
				var wordCount = txt.trim().replace(/\s+/gi, ' ').split(' ').length;
				if (wordCount<6)
				{
				alert("Debe insertar al menos 5 palabras")
				}
			}
		}
	// Animación de respuesta correcta e incorrecta.
	function correctAnimation() {
		animatePoints('right');
	}

	// Animación de respuesta correcta e incorrecta.
	function wrongAnimation() {
		animatePoints('wrong');
	}

	// Esta función anima el puntaje en pantalla.
	function animatePoints(cls) {
		$('header .points').addClass('animate ' + cls);
		setTimeout(function() {
			$('header .points').removeClass('animate ' + cls);
		}, 500);
	}

	// Cuando el juego termina, esta función es ejecutada.
	function finish() {
		if (timeLeftForQuestion == 0) {
			$('.times_up').show();
		}
		$('p.final_points').html(points + ' puntos');
		$('.question.card:visible').hide();
		$('.finish.card').show();
	}

	// 24
	restart();

});