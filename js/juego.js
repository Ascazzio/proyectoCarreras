

//        Modificador de trapecios

let tx = "t"; //Cada "t" es un trapecio, "x" es el numero del trapecio

const movCarretera = () => {

    setInterval( () => {

        for (let i = 1; i < 12; i++) {       //Recorre cada "t" y cambia sus propiedades

            tx = "t" + i;       

            if (document.getElementById(tx).classList.contains("ligth")) {

                document.getElementById(tx).classList.add("dark");              // Si es "claro", cambia a oscuro
                document.getElementById(tx).classList.remove("ligth");

            } else {
                document.getElementById(tx).classList.add("ligth");
                document.getElementById(tx).classList.remove("dark");           // Y viseversa
            }

        }
        

    }, 500);

}


//   Movimiento

let carril = 2;

const keyEvent = (event) => {

    
    switch(event.keyCode){
        case 32:
            console.log("pulsaste la barra espaciadora");
            
        break;

        //Derecha
        case 39:
            console.log("pulsaste la flecha hacia derecha");
            
            if (document.getElementById("jugador").classList.contains("izq")) {         // Si se encuentra en la derecha
                document.getElementById("jugador").classList.remove("izq");             // Pase al medio
                document.getElementById("jugador").src = "../img/challenger.png";

                setTimeout(() => {
                    carril = 2;
                    console.log("carril =" + carril);    
    
                }, 250);

            } else {
                document.getElementById("jugador").src = "../img/challengerIzq.png";
                document.getElementById("jugador").classList.add("der");                // Si ya se encuentra en el centro
                                                                                        
                setTimeout(() => {                                                      // Entoces cambiar a la derecha
                    carril = 3;
                    console.log("carril =" + carril);    
    
                }, 250);

            }
            
        break;

        //Izquierda
        case 37:
            console.log("pulsaste la flecha hacia izquierda");
            document.getElementById("jugador").src = "../img/challengerDer.png";

            if (document.getElementById("jugador").classList.contains("der")) {
                document.getElementById("jugador").classList.remove("der");
                document.getElementById("jugador").src = "../img/challenger.png";

                setTimeout(() => {
                    carril = 2;
                    console.log("carril =" + carril);    
                }, 250);

            } else {
                document.getElementById("jugador").src = "../img/challengerDer.png";
                document.getElementById("jugador").classList.add("izq");

                setTimeout(() => {
                    carril = 1;
                    console.log("carril =" + carril);    
                }, 250);
            }

        break;

        default:
            console.log("Movimineto invalido");
        break;
    }

   
}

class trafico {
    constructor(pos, modelo) {
        this.pos = pos;
        this.modelo = modelo;
    }
}

const eliminar = (hijo) => {
    let elemento = document.getElementById(hijo);
    let padre = elemento.parentNode;
    padre.removeChild(elemento);
}

movCarretera();
document.getElementById("trafico").classList.add("traficoFinal");
document.getElementById("traficoDer").classList.add("traficoFinalDer");
document.getElementById("traficoIzq").classList.add("traficoFinalIzq");


// //Eliminar trafico
// setTimeout(() => {
//     eliminar("trafico");
// }, 5000);
