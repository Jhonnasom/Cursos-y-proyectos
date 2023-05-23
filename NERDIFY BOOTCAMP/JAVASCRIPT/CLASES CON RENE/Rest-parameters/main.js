

// const data
const arr=new Array(10)
const obj=new Object()
const num=new Number(0)
const bool=new Boolean(0)
const str=String()

console.log('str',typeof str)

// Metodos de los arrays
// .slice retorna una copia 
// .splice el slice crea un nuevo array, y remueve los elementos que definio del array base y los pasa al new array

const newArr=arr.slice()

const sumMarketCash=marketData.reduce((prev,curr,currIdx,arr)=>{
    return prev
})

function reduce(arr,callbackFn,initialValue){
    if(!Array.isArray(arr)){
        throw new TypeError("No es un array")
    }
    let _initialValue=initialValue ?? arr[0]
    const startIndex=initialValue !==null ||initialValue ? 0: 1
    let acc=_initialValue

    for(let i=startIndex;i<arr.length;i++){
        acc=callbackFn(acc,arr[i],i,arr)
    }
    return acc
}

const reducee=reduce(
    marketData.splice(0,5),
    (acc,curr)=>{
        return acc+curr.cash_amount
    },
)


