const celda = document.querySelectorAll(".cell");
const mensajeTurno = document.querySelector(".status");
const reset = document.querySelector(".reset");
let turno = "X";
let tabla = ["","","","","","","","",""];
let running = true

const condicionVictoria =[
    [0,1,2],[3,4,5],[6,7,8],//filas
    [0,3,6],[1,4,7],[2,5,8],//clomunas
    [0,4,8],[2,4,6] //diagonales
]

celda.forEach((elemento,index) => {

    elemento.addEventListener("click", () =>{
        if (elemento.innerText !== "X" && elemento.innerText !== "O" && running ) {
            elemento.innerText=`${turno}`;
            tabla[index] = turno
            if (!comprobarGanador()) {
                cambiarTurno();   
            }
            else{
                mensajeTurno.innerText = `Gana ${turno}`
                running = false
                
                // resetear();
                // cambiarTurno();
            }
        }
    })
})

function cambiarTurno(){
    if(turno === "X" ){
        turno = "O"
    }
    else{
        turno = "X"
    }
    mensajeTurno.innerText = `Player ${turno}'s turn`

}

reset.addEventListener("click",()=>{
    resetear();
})

function resetear(){
    celda.forEach((elemento)=>{
        elemento.innerText = "";
    })
    for (let i = 0; i < tabla.length; i++) {
       tabla[i]="" 
    }
    running = true;
}

function comprobarGanador(){

    for (let i = 0; i < condicionVictoria.length; i++) {
       const [a,b,c] = condicionVictoria[i];
       if (tabla[a] && tabla[a]===tabla[b] && tabla[a]===tabla[c]) {
            return true;
       }
    }
    return false;
}