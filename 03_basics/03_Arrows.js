const user = {
    username: "sanjeev",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function sanjeev(){
//     let username = "sanju"
//     console.log(this.username);
// }
// sanjeev()

// const sanjeev = function(){
//        let username = "sanju"
//        console.log(this.username); 
// }

// const sanjeev = () => {
//     let username = "sanju"
//     console.log(this); 
// }

// sanjeev()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "sanjeev"})

console.log(addTwo(3, 4))