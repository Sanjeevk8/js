// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) =>{
//     // console.log(item);
//     return item;
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//      return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'fiction', publish: 1981, edition: 2001},
    { title: 'Book Two', genre: 'maths', publish: 1989, edition: 2002},
    { title: 'Book Three', genre: 'science', publish: 1971, edition: 2003},
    { title: 'Book Four', genre: 'history', publish: 1998, edition: 2004},
    { title: 'Book Five', genre: 'fiction', publish: 1998, edition: 2005},
    { title: 'Book Six', genre: 'history', publish: 1951, edition: 2006},
    { title: 'Book Seven', genre: 'fiction', publish: 1971, edition: 2007},
    { title: 'Book Eight', genre: 'math', publish: 1987, edition: 2008}
];

let userBooks = books.filter( (bk) => bk.genre === 'history')

userBooks = books.filter((bk)=>{ 
    return bk.publish >= 1990 && bk.genre === 'history'
})

console.log(userBooks);