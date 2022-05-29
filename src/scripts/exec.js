const exec = require('child_process').exec;

function execAsync(command) {
    return new Promise(function (resolve, reject) {
        exec(command, (error, stdout, stderr) => {
            if (stderr !== '') {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}

module.exports = { execAsync }