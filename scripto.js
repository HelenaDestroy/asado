var vp = document.getElementById("land");
var papel = vp.getContext("2d");
var fondo = {
    url: "tile.png",
    cargaOk: false
}
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

var musiquita = {
    url: "Come_di.mp3",
    mcargaOk: false
}
musiquita = new Audio();
musiquita.src = musiquita.url;
musiquita.addEventListener("play", ponerMusica);

function cargarMusica()
{ mcargaOk = true;
music = true;}

function ponerMusica(){
 if (music == true){
 musiquita.play();}
}

var cerdito = {
    url: "cerdito.png",
    cargaOk: false
}
cerdito.objeto = new Image();
cerdito.objeto.src = cerdito.url;
cerdito.objeto.addEventListener("load", cargarCerdito);

function dibujar()
{
    if (fondo.cargaOk)
    {
        papel.drawImage (fondo.objeto, 0, 0);
        nube.cargaOk = false;
    }
       if (cerdito.cargaOk)
        { papel.drawImage(cerdito.objeto, 0, 0);
            nube.cargaOk = false; 
        }
    }

var nube = {   
url: "nube.png",
cargaOk: false
} 
nube.objeto = new Image();
nube.objeto.src = nube.url;
nube.objeto.addEventListener("load", dibujarNubes);

function  dibujarNubes()
{ 
    cantidad = aleatorio (3,5);
    nube.cargaOk = true; 
if (nubes == true)
   {for (var i=0; i<cantidad; i++) 
    {
    papel.drawImage(nube.objeto, xn, yn);
    var xn = aleatorio (82, 420);
    var yn = aleatorio (82, 420);
    }
    }
}

function aleatorio(min,maxi)
{
var resultado;
resultado =  Math.floor(Math.random() * (maxi - min +1)) + min;
return resultado;
}



function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();

    } 
function cargarCerdito(){
    cerdito.cargaOk = true;
    dibujar();
 }

var teclas = {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
}
var nubes = false;
var movimiento = 10;
var y = 30;
var x = 30;
document.addEventListener("keyup", moverCerdito);
function moverCerdito(evento)
{ nubes = true;
if (evento.keyCode == teclas.UP)
{  
dibujarCerdito();
console.log ("arriba");
y = y - movimiento;
dibujarNubes();}
if (evento.keyCode == teclas.DOWN)
{
dibujarCerdito();
console.log ("ABAJO");
y = y + movimiento;
dibujarNubes();
}
if (evento.keyCode == teclas.LEFT)
{
dibujarCerdito();
console.log ("LEFT");
x = x - movimiento;
dibujarNubes();
}
if (evento.keyCode == teclas.RIGHT)
{
dibujarCerdito();{
console.log ("RIGHT");
x = x + movimiento;
dibujarNubes();
}
}

function dibujarCerdito()
{
    if (fondo.cargaOk)
        {
        papel.drawImage (fondo.objeto, 0, 0);
        }
    if (cerdito.cargaOk)
     {
         papel.drawImage(cerdito.objeto, x, y);
    }
}
}



