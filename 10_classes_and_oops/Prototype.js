// let myName = "sanjeev    "
// let mychannel = "chai   "
// console.log(myName.length);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sanjeev = function(){
    console.log(`sanjeev is present in all objects`);
}
Array.prototype.heysanju = function(){
    console.log(`sanjeev saying you hello`);
}
// heroPower.sanjeev()
// myHeros.sanjeev()
// myHeros.heysanju()
// heroPower.heysanju()

let anotherUsername = "chaiaurcode   "

String.prototype.trueLength = function(){
    console.log(`true length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"sanjeev".trueLength()
"iceTea".trueLength()