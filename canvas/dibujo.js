var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var i = 0;

while(i <= 300) {
    dibujarLinea(lienzo, "green", 0, i, i, 300);
    i += 10
}

function dibujarLinea(lienzo_, color_, x_ini, y_ini, x_fin, y_fin) {

    lienzo_.beginPath();
    lienzo_.strokeStyle = color_;
    lienzo_.moveTo(x_ini, y_ini);
    lienzo_.lineTo(x_fin, y_fin);
    lienzo_.stroke();
    lienzo_.closePath();

}