var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;
var estado;
var boton = document.getElementById("botoncito");

boton.addEventListener("click", espacioCanvas);
cuadrito.addEventListener("mousedown", presionarMouse);
cuadrito.addEventListener("mousemove", dibujarMouse);
cuadrito.addEventListener("mouseup", soltarMouse);

function espacioCanvas(evento) {
    
    var anchoCanvas = document.getElementById("ancho_canvas");
    var altoCanvas = document.getElementById("alto_canvas");

    cuadrito.width = parseInt(anchoCanvas.value);
    cuadrito.height = parseInt(altoCanvas.value);

    var ancho = cuadrito.width - 1;
    var alto = cuadrito.height - 1;

    dibujarLinea("grey", 1, 1, 1, alto, papel);
    dibujarLinea("grey", 1, alto, ancho, alto, papel);
    dibujarLinea("grey", ancho, alto, ancho, 1, papel);
    dibujarLinea("grey", ancho, 1, 1, 1, papel);
    
}

function presionarMouse(evento) {
    
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function dibujarMouse(evento) {
    
    var color = "blue";

    if (estado == 1) {
        dibujarLinea(color, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
}

function soltarMouse(evento) {
    
    estado = 0;
    x = evento.layerX;
    y = evento.layerY;
}

function dibujarLinea(color, x_ini, y_ini, x_fin, y_fin, lienzo) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWitdh = 3;
    lienzo.moveTo(x_ini, y_ini);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();
}