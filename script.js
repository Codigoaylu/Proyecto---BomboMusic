
document.addEventListener('click', function(event){

    let boton = event.target.dataset.boton;

    let sonido = document.querySelector("audio[data-boton="+ boton +" ]");

    sonido.currentTime = 0.1;

    sonido.play();

});