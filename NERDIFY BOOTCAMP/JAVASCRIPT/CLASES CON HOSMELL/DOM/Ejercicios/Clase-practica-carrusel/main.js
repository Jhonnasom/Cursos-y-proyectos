const bottoms=document.querySelectorAll('.btn')
const image=document.querySelectorAll('.image')

const bottomsArray=Array.from(bottoms)
const imagesArray=Array.from(image)

bottomsArray.forEach(element => {
    for (let index = 0; index < bottomsArray.length; index++) {
        bottomsArray[i].addEventListener('click',function carrousel(){
            if(bottomsArray[i].classList.toggle('btn-active')){
                
            }
        })

        
    }
});



// btn1.addEventListener('click',function carr(){
//     image1.classList.toggle('image-active')
//     btn1.classList.toggle('btn-active')

//     image2.classList.remove('image-active')
//     btn2.classList.remove('btn-active')

//     image3.classList.remove('image-active')
//     btn3.classList.remove('btn-active')
// });

// btn2.addEventListener('click',function carr(){
//     image2.classList.toggle('image-active')
//     btn2.classList.toggle('btn-active')

//     image1.classList.remove('image-active')
//     btn1.classList.remove('btn-active')

//     image3.classList.remove('image-active')
//     btn3.classList.remove('btn-active')
// });

// btn3.addEventListener('click',function carr(){
//     image3.classList.toggle('image-active')
//     btn3.classList.toggle('btn-active')

//     image1.classList.remove('image-active')
//     btn1.classList.remove('btn-active')

//     image3.classList.remove('image-active')
//     btn3.classList.remove('btn-active')
// });

// image1.addEventListener('click',function carr(){
//     image1.classList.toggle('image-active')
//     btn1.classList.toggle('btn-active')

//     image2.classList.remove('image-active')
//     btn2.classList.remove('btn-active')

//     image3.classList.remove('image-active')
//     btn3.classList.remove('btn-active')
// });

// image2.addEventListener('click',function carr(){
//     image2.classList.toggle('image-active')
//     btn2.classList.toggle('btn-active')

//     image1.classList.remove('image-active')
//     btn1.classList.remove('btn-active')

//     image3.classList.remove('image-active')
//     btn3.classList.remove('btn-active')
// });

// image3.addEventListener('click',function carr(){
//     image3.classList.toggle('image-active')
//     btn3.classList.toggle('btn-active')

//     image1.classList.remove('image-active')
//     btn1.classList.remove('btn-active')

//     image3.classList.remove('image-active')
//     btn3.classList.remove('btn-active')
// });