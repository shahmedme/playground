let readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }),
    time, num;

rl.question('How many times you want to play?', function(time){
    for (i = 0; i < time; i++){
        myFn();
    }
    rl.close();
});

function myFn(){
    rl.question('Enter the number', function(num){
        console.log('you entered ' + num);
        rl.close();
    });
}