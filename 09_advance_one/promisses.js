const promissOne = new Promise(function (resolve, reject){
    //Do an async task
    //DB calls, cryptogrphy, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promissOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promissThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "sanjeev", email: "sanj@example.com"})
    },1000)
})

promissThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "sanju", password: "123"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("the promise either rejected or resolved");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "sanju", password: "123"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
try {
        const response = await promiseFive
        console.log(response);
} catch (error) {
    console.log(error);
}
}

consumePromiseFive()

// async function getAllUsers(){
// try {
//     const response = await fetch('https://api.github.com/users/Sanjeevk8')
//     const data = await response.json()
//     console.log(data);
// } catch (error) {
//     console.log("E: ",error);
// }
// }

// getAllUsers()

fetch('https://api.github.com/users/Sanjeevk8')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})