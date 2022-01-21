// inicializamos un array de arrays con la preguntas del juego. 

function validar1()
{
	if (document.getElementById("txt_Res1").value==0)
	{
		alert("ta vacio");
		showQuestionCardAtIndex(currentQuestion);
	}
}
function validar2()
{
	if (document.getElementById("txt_Res2").value==0)
	{
		alert("ta vacio");
	}
}
function validar3()
{
	if (document.getElementById("txt_Res3").value==0)
	{
		alert("ta vacio");
	}
}
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
	<form name='frmu' id='frm'>\
	<li> \
          <textarea name='txtRes' id='txt_Res1'> </textarea> \
		  </li> \
		<ul class='options'> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2' Onclick='validar1()'> \
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
        <li> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2' Onclick='validar2()'> \
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
        <li> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2' Onclick='validar3()'> \
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
// Manipulacion de elementos con JQuery.
$(function() {

	// Uso de jQuery para escuchar el evento click del botón de Comenzar y Volver a jugar.
	$('button.start').click(start);
	$('.play_again button').click(restart);

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

	
	

	// Esta es una de las funciones clave del juego, encargada de generar las preguntas. 
	function generateCards() {
		$('.questions').html('');
		for (var i = 0; i < questions.length; i++) {
			if (i==12){
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
				var q = questions[i];
				var html = questionTemplate({
					question: q[0],
					index: i,
					a: q[1],
					b: q[2],
					c: q[3],
					d: q[4]
				});
			}
			$('.questions').append(html);
		};

                // Indicamos que nos interesa el evento change de los inputs dentro de los elementos con clase question y card (cada una de las preguntas).
		$('.question.card input').change(optionSelected);
	}

	// Esta función cambia el estado del juego para pasar de una pregunta a la siguiente.
	function moveToNextQuestion() {
		currentQuestion += 1;
		if (currentQuestion > 1) {
			$('.question.card:nth-child(' + (currentQuestion-1) + ')').hide();
		}

		// Se muestra la siguiente pregunta.
		showQuestionCardAtIndex(currentQuestion);
		setupQuestionTimer();
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