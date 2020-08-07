
class Billete {

    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
    }
}


function entregarDinero() {

    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var billetes in caja) {

        if (dinero > 0) {

            div = Math.floor(dinero / caja[billetes].valor);

            if (div > caja[billetes].cantidad) {
                papeles = caja[billetes].cantidad;
            }
            else {
                papeles = div;
            }

            entregado.push(new Billete(caja[billetes].valor, papeles));
            dinero -= (caja[billetes].valor * papeles);

        }
    }

    if (dinero > 0) {

        resultado.innerHTML = "Not enough money";
    }
    else {
        for (var e in entregado) {

            if (entregado[e].cantidad > 0) {

                resultado.innerHTML += (entregado[e].cantidad + " billetes de $" + entregado[e].valor + "<br />");
            }
        }
    }

    console.log(entregado);

}

var total = 0;
var caja = [];
var entregado = [];

caja.push(new Billete(50, 25));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);