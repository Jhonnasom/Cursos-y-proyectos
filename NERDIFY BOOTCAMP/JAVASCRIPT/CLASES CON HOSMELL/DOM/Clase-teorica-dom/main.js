const button=document.querySelector('.button')
const button=document.querySelector('.link')
console.log('button: ',button)


// Primero se pasa el evento, luego una funcion callback
button.addEventListener('click',function(){
    console.log('Clicked');
})

link.addEventListener('click',function(event){
    event.preventDefault()
    // Sirve para prevenir una accion por defecto
    console.log('Test:')
    
})