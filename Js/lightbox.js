const imagenes = document.querySelectorAll('.img-galeria')
const imagenesligt = document.querySelector('.agregar-imagen')
const contenedorligt = document.querySelector('.imagen-ligt')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerimagen( imagen.getAttribute('src'))
    })
})

contenedorligt.addEventListener('click',(e)=>{
    if(e.target !=imagenesligt){
        contenedorligt.classList.toggle('show')
        imagenesligt.classList.toggle('showImage')
    }
})

const aparecerimagen =(imagen)=>{
    imagenesligt.src=imagen;
    contenedorligt.classList.toggle('show')
    imagenesligt.classList.toggle('showImage')
}
