#!/usr/bin/env node

/**
 * Copyright (c) 2018 Jundat95.
 * 
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 * 
 */

var figlet = require('figlet');
var execSync = require('child_process').execSync;
var initProject = require('./ultis/init');
var inputNumber = require('./ultis/inputNumber');
var selecOptions = require('./ultis/selectOptions');

var invoke = async function init() {

    console.log(
        figlet.textSync('Auto Download', { horizontalLayout: 'full' })
    );

    var package = await initProject();
    var count = 0;

    var options = await selecOptions();
    if (options.option === 'loop') {
        var number = await inputNumber("Enter the number to loop: ");
        for (var i = 0; i < number.number; i++) {
            await execSync('npm i -g ' + package.packageName, { stdio: 'inherit' });
            count++;
            console.log("count: " + count);
        }
    } else if (options.option === 'time') {
        var number = await inputNumber("Enter the time(ms) to loop: ");
        var start = new Date();
        var end = 0;
        while ((end - start) <= number.number) {
            await execSync('npm i -g ' + package.packageName, { stdio: 'inherit' });
            end = new Date();
            count++;
            console.log("count: " + count);
        }
    }

    return count;
}

invoke();