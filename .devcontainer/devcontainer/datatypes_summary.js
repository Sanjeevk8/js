// primitive

// 7types : String, Number, boolean, null, undefined, symbol, BigInt


const isLoggedIn = false//boolean
const outsideTemp = null//object
let userEmail;//undefined

const id = Symbol('123')//symbol
const anotherId = Symbol('123')//symbol

// console.log(id === anotherId);

const bigNumber = 3456778901234678n//bigInt
// refrence (non primitive)


//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name:"sanjeev",
    age: 22,
}

 const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof heros);