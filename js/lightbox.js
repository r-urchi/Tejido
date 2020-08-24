const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const desaparecerHamburquesa = document.querySelector('.hamburguesa');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', () =>{

        aparecerImagen(imagen.getAttribute('src'));

    });
});


//cerrar overlay
contenedorLight.addEventListener('click', (e) => {
    if(e.target != imagenesLight){

        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        desaparecerHamburquesa.style.opacity = '1';
    };
});

//abrir imagen
const aparecerImagen = (imagen) => {

    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    desaparecerHamburquesa.style.opacity = '0';
};

