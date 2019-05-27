 



var estado= 0;	//elestado del click

var colorLinea="black";

var cuadro= document.getElementById("areaDibujo"); // llamamos el cuadro canvas

var papel= cuadro.getContext("2d"); // le damos contexto que vamos a dibujar en 2d

var x;	//guarda la coordenada  en x
var y;	//guardar la coordenada en y



//MARCO
dibujarLinea(colorLinea, 0, 0, 300, 0, papel);
dibujarLinea(colorLinea, 300, 0, 300, 300, papel);
dibujarLinea(colorLinea, 300, 300, 0, 300, papel);
dibujarLinea(colorLinea, 0, 300, 0, 0, papel);


document.addEventListener("mousedown", presionarMouse); // detecta cuando presionamos(keydown) una tecla
document.addEventListener("mousemove", dibujarMouse);	//movemos el mose para dibujar
document.addEventListener("mouseup", soltarMouse);		//slatamos el clic

/*
Nos dice el evento y sus posibilidades en consola cuando damos keydown
================
function dibujarTeclado(e){
	//alert('hola');
	console.log('tecla oprimida');
	console.log(e);
}
*/

// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarLinea(color, xinicial,yinicial, xfinal, yfinal,lienzo){

	lienzo.beginPath(); // decimos que vamos a dibujar
	lienzo.strokeStyle = color; // selecciona el color
	lienzo.lineWidth = 3; // selecciona elancho de la linea
	lienzo.moveTo(xinicial,yinicial); //indicamos punto de inicio
	lienzo.lineTo(xfinal,yfinal); // indicamos punto final
	lienzo.stroke();	// se dibuja
	lienzo.closePath(); // indicamos que ya no vamos a dibujar
}
