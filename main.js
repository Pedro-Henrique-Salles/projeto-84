// Create a reference for the canva
var canvas=document.getElementById("canvas");
var contexto=canvas.getContext("2d");

var img_width = 300;
var img_height = 100;

var img_image;
var img_imgTag;

var img_x = 100;
var img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	contexto.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Escreva um código para obter o evento key-pressed
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	var keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			document.getElementById("d1").innerHTML="vc pressinou uma tecla alfabeto";
		}
		else if((keyPressed>=48)&&(keyPressed<=57)){
			numberkey();
			document.getElementById("d1").innerHTML="vc pressinou uma tecla numero";
		}
		else if((keyPressed>=37)&&(keyPressed<=40)){
			arrowkey();
			document.getElementById("d1").innerHTML="vc pressinou uma tecla direcional";
		}
		else if((keyPressed==17)||(keyPressed==18)||(keyPressed==27)){
			specialkey();
			document.getElementById("d1").innerHTML="vc pressinou uma tecla ctrl/esc/alt";
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="vc pressinou o simboloou outra tecla";
	}
}

function aplhabetkey(){
	img_image="alfabeto.png";
	add();
}
function numberkey(){
	img_image="número.png";
	add();
}
function arrowkey(){
	img_image="direcional.png";
	add();
}
function specialkey(){
	img_image="especial.png";
	add();
}
function otherkey(){
	img_image="outras.png";
	add();
}
	
