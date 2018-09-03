var inquirer = require('inquirer');

module.exports = async function initProject(message) {

    var options = [{
        message: message,
        type: "input",
        name: "number",
        validate: function(value) {
            if(value) {
                return true;
            } else {
                console.error("please " + message);
                return false;
            }
        }
    }];

   return await inquirer.prompt(options);
}