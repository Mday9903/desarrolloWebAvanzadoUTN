//Declaración y asignación de elementos del html en variables:
const videoHistoria = document.querySelector('#video-historia');
const pTiempo = document.querySelector('.tiempo-video');
const btnPlay = document.querySelector('#btnPlay');
const btnPause = document.querySelector('#btnPause');


//Creo un setTimeOut para darle tiempo al video para cargar:
setTimeout(()=>{
    pTiempo.textContent = (videoHistoria.duration).toFixed(2);
},300)

//Declaración de funciones para la reproducción del video:
const reproducirVideo = (event) => {
    videoHistoria.play();
}

const pausarVideo = (event) => {
    videoHistoria.pause();
}

//Declaración de eventos: 
btnPlay.addEventListener('click', reproducirVideo);
btnPause.addEventListener('click', pausarVideo);




