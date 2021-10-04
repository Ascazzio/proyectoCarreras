

let i = 0;
let tx = "t"; //Cada "t" es un trapecio, "x" es el numero del trapecio

const movCarretera = () => {

    setInterval( () => {

        for (i = 1; i < 13; i++) {

            tx = "t" + i;

            if (document.getElementById(tx).classList.contains("ligth")) {

                document.getElementById(tx).classList.add("dark");
                document.getElementById(tx).classList.remove("ligth");

            } else {
                document.getElementById(tx).classList.add("ligth");
                document.getElementById(tx).classList.remove("dark");
            }

        }
        

    }, 100);

}

movCarretera();
