const itemsGrid=document.querySelectorAll('[data-id]')
console.log(itemsGrid);
const arr=[];
let variable='x';

itemsGrid.forEach(function(item,index){
    item.addEventListener("click",function(event){
        const box=(event.target);
        if(box.innerText){
            return
        }
        box.innerText=variable;
        arr[index]=variable;
        variable=variable==="x"?"0":"x"
        console.log(arr)

        if((arr[0]=="x" && arr[1]=="x" &&arr[2]=="x")||(arr[0]=="0" && arr[1]=="0" &&arr[2]=="0")){
            console.log("You are winner!!")
        }else if((arr[3]=="x" && arr[4]=="x" &&arr[5]=="x")||(arr[3]=="0" && arr[4]=="0" &&arr[0]=="x")){
            console.log("You are winner!!")
        }else if((arr[6]=="x" && arr[7]=="x" &&arr[8]=="x")||(arr[6]=="0" && arr[7]=="0" &&arr[8]=="0")){
            console.log("You are winner!!")
        }else if((arr[0]=="x" && arr[3]=="x" &&arr[6]=="x")||(arr[0]=="0" && arr[3]=="0" &&arr[6]=="0")){
            console.log("You are winner!!")
        }else if((arr[1]=="x" && arr[4]=="x" &&arr[7]=="x")||(arr[1]=="0" && arr[4]=="0" &&arr[7]=="0")){
            console.log("You are winner!!")
        }else if((arr[2]=="x" && arr[5]=="x" &&arr[8]=="x")||(arr[2]=="0" && arr[5]=="0" &&arr[8]=="0")){
            console.log("You are winner!!")
        }else if((arr[0]=="x" && arr[4]=="x" &&arr[8]=="x")||(arr[0]=="0" && arr[4]=="0" &&arr[8]=="0")){
            console.log("You are winner!!")
        }else if((arr[2]=="x" && arr[4]=="x" &&arr[6]=="x")||(arr[2]=="0" && arr[4]=="0" &&arr[6]=="0")){
            console.log("You are winner!!")
        }
         
    });
});


