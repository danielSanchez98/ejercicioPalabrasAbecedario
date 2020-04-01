const mainCard=document.querySelector('.card#primaria');
let id=-1;
let abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L',
                  'M','N','Ñ','O','P','Q','R','S','T','U','V','W',
                  'X','Y','Z'
                 ];

class PostIt{
    constructor(id,letra,palabra){
        this.id=id;
        this.letra=letra;
        this.palabra=palabra;
    }
}

class Interfaz{

    mostrarMensaje(mensaje,tipo){
        const div = document.createElement('div');
        if(tipo==='error'){
            div.classList.add('mensaje','error');
        }else{
            div.classList.add('mensaje','correcto');
        }
        div.innerHTML=`${mensaje}`;
        mainCard.insertBefore(div,document.getElementById('cont'));

        setTimeout(function(){
            document.querySelector('.mensaje').remove();

        },1500);

    }

    agregarPostIt(postIt){
        let R=Math.round(Math.random()*256);
        let G=Math.round(Math.random()*256);
        let B=Math.round(Math.random()*256);
        let opacidad='0.4';
        const div = document.createElement('div');
        div.classList.add(`card#${postIt.id+1}`);
        div.innerHTML=`
                       <p id="cont-secondary">${postIt.id+1}</p>
                       <p id="palabra-secondary">${postIt.letra}</p>
                       <p id="pIngresada">${postIt.palabra}</p>
                       `;
        document.getElementById('contenedor').insertBefore(div,mainCard);
        div.style.background=`rgb(${R.toString()},${G.toString()},${B.toString()},${opacidad})`;
        console.log();
       
    }
    actualizarRegistro(id,letra){
        document.getElementById('cont').textContent=id;
        document.getElementById('palabra').textContent=letra;
        document.querySelector('label[for=texto] span').textContent=letra;
        document.getElementById('texto').value='';



    }

}
// Event Listeners
document.addEventListener('DOMContentLoaded',function(){

    let R=Math.round(Math.random()*256);
    let G=Math.round(Math.random()*256);
    let B=Math.round(Math.random()*256);
    let opacidad='0.4';
    document.querySelector('.card#primaria').style.background=`rgb(${R.toString()},${G.toString()},${B.toString()},${opacidad})`;

})

document.getElementById('formulario').addEventListener('submit', function(e){
    e.preventDefault();

    let palabra=document.getElementById('texto').value;
    let primerLetra=palabra.charAt(0).toUpperCase();    
    id++;
    let letra= abecedario[id];

    const interfaz= new Interfaz();

    if(palabra ==='' || primerLetra!=letra){  
        interfaz.mostrarMensaje('Incorrecto!. Por favor revise la palabra','error');      
        console.log('letra incorrecta o palabra vacia');
        id--;
    }else{
        interfaz.mostrarMensaje('Correcto!. La palabra se agregó','correcto');
        const postIt= new PostIt(id,letra,palabra);
        interfaz.agregarPostIt(postIt);
        interfaz.actualizarRegistro(id+2,abecedario[id+1]);
    }

});






