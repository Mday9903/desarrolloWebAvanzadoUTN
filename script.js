//Declaración y asignación de elementos del html en variables:
const videoHistoria = document.querySelector('#video-historia');
const pTiempo = document.querySelector('.tiempo-video');
const btnPlay = document.querySelector('#btnPlay');
const btnPause = document.querySelector('#btnPause');
const arrayDragCont = document.getElementsByClassName('contImg');
const arrayDragImagen = document.getElementsByClassName('imgDrag');
const contCajas = document.querySelector('.cont-cajas');
let contadorDrag = 0;
const btnReiniciar = document.querySelector('#boton-reiniciar');

//Creo un setTimeOut para darle tiempo al video para cargar:
if (pTiempo){
    setTimeout(()=>{
        pTiempo.textContent = (videoHistoria.duration).toFixed(2);
    },300)
}


//Declaración de funciones para la reproducción del video:
const reproducirVideo = (event) => {
    videoHistoria.play();
}

const pausarVideo = (event) => {
    videoHistoria.pause();
}

//Declaración de eventos: 
if (btnPlay){
    btnPlay.addEventListener('click', reproducirVideo);
    btnPause.addEventListener('click', pausarVideo);
}

if (btnReiniciar){
    btnReiniciar.addEventListener('click', ()=>{
        location.reload();
        })
    };



// Eventos Drag & Drop:


for (const element of arrayDragImagen) {
    element.addEventListener('dragstart',(event) =>{
        event.dataTransfer.setData("Text",element.id);
    })
};

for (const element of arrayDragCont) {
    element.addEventListener('dragover', (event) => {
        event.preventDefault();
        element.classList.add('iluminado');
    });
};

for (const element of arrayDragCont) {
    element.addEventListener('dragleave', () => {
        element.classList.remove('iluminado');
    });
};
for (const element of arrayDragCont) {
    element.addEventListener('drop', (event) => {
        contadorDrag ++;
        let imagen = document.getElementById(event.dataTransfer.getData("Text"));
        element.innerHTML= `<img src=${imagen.src} >`;
        imagen.style.display = 'none';
        if (contadorDrag == 3){
            contCajas.style.display = "flex";
        }
    });
};












