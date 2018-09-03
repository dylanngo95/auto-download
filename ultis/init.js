var inquirer = require('inquirer');

module.exports = async function initProject() {

    var options = [{
        message: "Enter npm package name: ",
        type: "input",
        name: "packageName",
        validate: function(value) {
            if(value) {
                return true;
            } else {
                console.error("please enter npm package name");
                return false;
            }
        }
    }];

   return await inquirer.prompt(options);
}