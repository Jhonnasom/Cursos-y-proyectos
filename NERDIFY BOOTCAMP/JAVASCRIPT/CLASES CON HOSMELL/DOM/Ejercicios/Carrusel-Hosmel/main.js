const buttoms=Array.from(document.querySelectorAll('.dot'))
const images=Array.from(document.querySelectorAll('.image'))

dots.forEach(function(node,index){
    node.addEventListener('click',function(event){
        document.querySelector('.dot--active')?.classList.remove('dot--active')
        document.querySelector('.image--active')?.classList.remove('image--active')

        event.target.classList.add('dot--active')
        images[index]?.classList('image--active')
    })
})