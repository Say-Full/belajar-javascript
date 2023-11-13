// Validator

// const validator = require('validator');

// console.log(validator.isEmail('saiful@gmail.com'));

// console.log(validator.isMobilePhone('0852777770088', 'id-ID'));

// console.log(validator.isNumeric('0852777770088'));





// Chalk

const chalk = require('chalk');

// console.log(chalk.blue('Yo!'));
// console.log(chalk.bgBlue('Yo!'));
// console.log(chalk.black.bgBlue('Yo!'));
// console.log(chalk.bold.white.bgBlue('Yo!'));

const nama = "Saiful";
console.log(chalk`Tes {bgRed satu} dua {bgGreen.bold ${nama}}`);






