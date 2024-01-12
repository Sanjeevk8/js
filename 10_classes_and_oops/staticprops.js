class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const sanjeev = new User("sanjeev")
// console.log(sanjeev.createId());

class Teacher extends User{
    constructor(username, email){
    super(username);
    this.email = email;
    }
}
const sam = new Teacher("sam", "sam@gamil.com");
sam.logMe();