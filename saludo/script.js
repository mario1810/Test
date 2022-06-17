//Linea de prueba para saber que está bien la conexión
console.log("Me parece que todavia me extrañas");

let temp=setInterval(cambiarSaludo,2000);
let frase=document.getElementsByTagName("h3")[0];
//frase.innerText="hola";
//console.log(frase);    

let  key =true;
function cambiarSaludo(){

    
    if(key==true){
        //document.getElementsByTagName("h3")[0].innerHTML="impongo moda";"
        frase.innerText="Impongo moda";
        key=false;
    }else{
        frase.innerText="Ganando como siempre";
       key=true; 
    }

    //console.log("frase :"+frase);
    //console.log("Me parece una falta de respeto");
    //clearInterval(temp);
}

