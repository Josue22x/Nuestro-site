const imagenes = document.querySelector('.img-galeria')
const imagenesligt=document.querySelector('.agregar-imagen')
const contenedorligt=document.querySelector('.imagen-ligt')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAtribute('src'))
    })
    
});

const aparecerImagen=(imagen)=>{
    imagenesligt.src=imagen;
    contenedorligt.classList.toggle('show')
    imagenesligt.classList.toggle('showImage')
}