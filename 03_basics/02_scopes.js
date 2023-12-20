// var c = 300
let a = 300
if (true) {
    let a = 20
    const b = 10
    // console.log("Inner: ", a);
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sanjeev"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "sanjeev"
    if (username === "sanjeev") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++intersting++++++++++++

console.log(addone(5))

function addone(num){//normal function
    return num + 1
}


addTwo(5)

const addTwo = function(num){//function expression 
    return num + 2
}
