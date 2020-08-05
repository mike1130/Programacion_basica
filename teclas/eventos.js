var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea(papel, "red", x - 1, y - 1, x + 1, y + 1);


function dibujarLinea(lienzo_, color_, x_ini, y_ini, x_fin, y_fin) {

    lienzo_.beginPath();
    lienzo_.strokeStyle = color_;
    lienzo_.lineWidth = 3;
    lienzo_.moveTo(x_ini, y_ini);
    lienzo_.lineTo(x_fin, y_fin);
    lienzo_.stroke();
    lienzo_.closePath();

}


function dibujarTeclado(evento) {
    
    // console.log("Tecla oprimida");
    // console.log(evento.keyCode);
    // if(evento.keyCode == teclas.UP) {
    //     console.log("Vamo' pa' arriba");
    // }

    var colorcito = "blue";
    var movimiento = 10

    switch(evento.keyCode) {
        
        case teclas.UP:
            dibujarLinea(papel, colorcito, x, y, x, y - movimiento);
            y -= movimiento;         
        break;
        case teclas.DOWN:
            dibujarLinea(papel, colorcito, x, y, x, y + movimiento);
            y += movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(papel, colorcito, x, y, x - movimiento, y);
            x -= movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(papel, colorcito, x, y, x + movimiento, y);
            x += movimiento;
        break;
        default:
            console.log("otra tecla");
        break;
    }
    
}
