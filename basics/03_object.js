// singleton
// Object.create

//object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "sanjeev",
    "full name" : "yadav",
    [mySym]: "mykey1",
    age: 18,
    loacation: "pune",
    email: "sanjeev@gamil",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email = "sanjeev@chat.com"
// Object.freeze(jsUser)
// jsUser.email = "sanjeev@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());