var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);


rl.question('What is your age ? ', (age) => {
    console.log(`Oh, so you are ${age} years old.`);
    rl.close();
});
