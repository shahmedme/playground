process.stdin.resume();
process.stdin.setEncoding('utf8');

let num1, num2, sum;

console.log("Enter the first number: ");
process.stdin.on('data', function(num){
    // console.log(num);
});

// console.log("Enter the second number: ");
// process.stdin.on('data', function(num){
//     console.log(num);
// });