var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

var lineas = document.getElementById("cantidad_lineas_dibujar");

var boton = document.getElementById("boton_ejecutar");
boton.addEventListener("click", dibujoPorClick);


function dibujarLinea(lienzo_, color_, x_ini, y_ini, x_fin, y_fin) {

    lienzo_.beginPath();
    lienzo_.strokeStyle = color_;
    lienzo_.moveTo(x_ini, y_ini);
    lienzo_.lineTo(x_fin, y_fin);
    lienzo_.stroke();
    lienzo_.closePath();

}


function dibujoPorClick() {
    
    console.log(lineas);
    var x = parseInt(lineas.value);
    var l = 0;
    var yi, xf;
    var color_l1 = "#AAF";
    var espacio = ancho / x;

    while(l <= x) {
        yi = espacio * l;
        xf = espacio * (l + 1)
        dibujarLinea(lienzo, color_l1, 0, yi, xf, ancho - 1);
        dibujarLinea(lienzo, color_l1, yi, 0, ancho - 1, xf);
        l += 1
    }

    dibujarLinea(lienzo, color_l1, 1, 1, 1, ancho - 1);

    dibujarLinea(lienzo, color_l1, 1, ancho - 1, ancho - 1, ancho - 1);

}