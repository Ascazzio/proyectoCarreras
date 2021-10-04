
let tx = "t"; //Cada "t" es un trapecio, "x" es el numero del trapecio

const movCarretera = () => {

    setInterval( () => {

        for (let i = 1; i < 12; i++) {

            tx = "t" + i;

            if (document.getElementById(tx).classList.contains("ligth")) {

                document.getElementById(tx).classList.add("dark");
                document.getElementById(tx).classList.remove("ligth");

            } else {
                document.getElementById(tx).classList.add("ligth");
                document.getElementById(tx).classList.remove("dark");
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
            
            if (document.getElementById("jugador").classList.contains("izq")) {
                document.getElementById("jugador").classList.remove("izq");
                document.getElementById("jugador").src = "../img/challenger.png";
            } else {
                document.getElementById("jugador").src = "../img/challengerIzq.png";
                document.getElementById("jugador").classList.add("der");
            }

            setTimeout(() => {
                carril = carril + 1;    
            }, 250);

            console.log(carril);

            
        break;

        //Izquierda
        case 37:
            console.log("pulsaste la flecha hacia izquierda");
            document.getElementById("jugador").src = "../img/challengerDer.png";

            if (document.getElementById("jugador").classList.contains("der")) {
                document.getElementById("jugador").classList.remove("der");
                document.getElementById("jugador").src = "../img/challenger.png";
            } else {
                document.getElementById("jugador").src = "../img/challengerDer.png";
                document.getElementById("jugador").classList.add("izq");
            }

            setTimeout(() => {
                carril = carril - 1;    
            }, 250);

            console.log(carril);


        break;

        default:
        
        break;
    }

   
}

movCarretera();