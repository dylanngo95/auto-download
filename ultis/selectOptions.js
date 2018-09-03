var inquirer = require('inquirer');

module.exports = async function selectOptions(message) {

    var options = [{
        message: "Use loop or time ?",
        type: "list",
        name: "option",
        choices: [
            { value: "loop", name: "use loop "},
            { value: "time", name: "use time "},
        ]
    }];

   return await inquirer.prompt(options);
}