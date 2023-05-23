//Scope

// Var estara disponible a nivel global

// const word='hello'

// function hello(from='R1',world='world',third='Peppa'){
//     console.log(from,world,third)
//     // world
//     // from
//     // third
// }
// hello('Nicaragua',null,'thrid')


// function hello(opts){
//     console.log(opts(opts.colombia))
// }

// hello({from:'nicaragua',to:'peppa'})



// function hello(param1){
//     if(typeof param1 !=='object' || param1 ===null){
//         throw new TypeError('Error type error');
//     }
//     console.log(param1)
// }
// const obj={from:'nicaragua',to:'peppa'}
// hello(null)


// // Destructuracion de un objeto a nivel de funcion
// function hello({'user-id':userId}){
//     console.log(userId)
// }

// const firstNameKey='second'

// const obj={
//     'user-id':123,
//     'first-name':'Juan',
//     last_name:'Garcia',
//     1:'uno',
//     [firstNameKey]:'computed key',
//     'con espacio':null,
// }

// const arr=[1,2,5]

// arr['2']
// console.log(obj[firstNameKey+'-'+'name'])
// console.log(obj['first-name'])
// console.log(obj['1'])
// console.log(obj['first'])
// console.log(obj['con espacio'])

const user={
    id:1,
    name:'Monkey D. Luffy',
    power:1234,
    age:21,
    isDead:false,
    fruit:{
        name:'Gomugomu',
        power:123,
        type:'paramecia'
    },
    friends:[
        {
        id:2,
        name:'Rononoa Zoro',
        power:1000,

    },
    {
        id:3,
        name:'Nami ',
        power:3000,
    },
],
}
console.log(user.name)
console.log(user.fruit.name)
console.log(user.friends[0].id)
console.log(user.age)
console.log(user.friends[1].power)

function printNames(friends){
    for(let i=0;i<friends.length;i++){
        console.log(friends[i].name)
    }

}

function sumFriendsPower(friends){
    let sum=0
    for(let i=0;i<friends.length;i++){
        sum +=friends[i].power
    }
    return sum
}

const totalTeamPower=user.power + sumFriendsPower(user.friends)
console.log(totalTeamPower)
console.log(sumFriendsPower(user.friends))
// printNames(user.friends)