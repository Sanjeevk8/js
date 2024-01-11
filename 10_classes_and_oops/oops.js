const user = {
    username: "sanjeev",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Get user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// 

function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}
const userOne = new User("sanjeev", 12, true)
const userTwo = new User("sanju", 24, false)
console.log(userOne);
console.log(userTwo);