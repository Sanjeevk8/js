// Immediately Invoked Function Expression (IIFE)

(function db(){//named iffe
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("sanjeev")