//Linea de prueba para saber que está bien la conexión
console.log("Me parece que todavia me extrañas");

let temp=setInterval(cambiarSaludo,2000);
let frase=document.getElementsByTagName("h3")[0];

/**
 * Cambia la frase en el titulo h2
 */ 
function cambiarSaludo(){
    if(frase.innerHTML=="Ganando como siempre"){
        //document.getElementsByTagName("h3")[0].innerHTML="impongo moda";"
        frase.innerHTML="Impongo moda";
        key=false;
    }else{
        frase.innerHTML="Ganando como siempre";
       key=true; 
    }
    //clearInterval(temp);
}

