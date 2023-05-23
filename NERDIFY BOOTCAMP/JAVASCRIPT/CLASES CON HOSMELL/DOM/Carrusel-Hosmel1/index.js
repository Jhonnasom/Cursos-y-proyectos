// Mandamos a traer todos los selectores que contengan las clases declaradas
const image = document.querySelectorAll(".images");
const btns = document.querySelectorAll(".btns")

// Convertimos los elementos que contengan la misma clases en un array
const ArrImage = Array.from(image);
const Arrbtns = Array.from(btns);


for (let i=0; i<ArrImage.length ; i ++){ //Recorremos el arreglo para anexar un AddEventListener
   // Con el addEventListener recibimos el evento click
    ArrImage[i].addEventListener("click", function (e) {
              
      // Reocoremos con un for para verificar si esta activo una imagen que no queremos que este activa
       for(let i=0; i<ArrImage.length ; i ++){ 
          if (ArrImage[i].classList.contains("activa") && ArrImage[i] !== e.target){ /// target es el elemento que activo el evento
            ArrImage[i].classList.remove("activa");
            Arrbtns[i].classList.remove("btnActivo");
          }
       }
       Arrbtns[i].classList.toggle("btnActivo");
       ArrImage[i].classList.toggle("activa");
    })
}

for (let i=0; i<Arrbtns.length ; i ++){ //Recorremos el arreglo para anexar un elemento a cada imagen
   Arrbtns[i].addEventListener("click", function (e) {
      for(let i=0; i<Arrbtns.length ; i ++){ ///para verificar si esta activo una imagen que no queremos que este activa
         if (Arrbtns[i].classList.contains("btnActivo") && Arrbtns[i] !== e.target){ /// target es el elemento que activo el evento
           Arrbtns[i].classList.remove("btnActivo");
           ArrImage[i].classList.remove("activa");
         }
      }
      ArrImage[i].classList.toggle("activa");
      Arrbtns[i].classList.toggle("btnActivo");
   })
}



