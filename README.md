Track all the packages being used within your project and notify user about the outdated packages via email.


const { generateReport } = require('@shivamchamoli1997/npm-package-manager/dist');

OR

import {generateReport} from '@shivamchamoli1997/npm-package-manager/dist';

//call to generate report
/**
* type: 'email' | 'json'
* to: recepient email address
* from: sender email address
* password: sender email password
* host: email provider, default set to smtp.gmail.com
* port: provider port, default set 465
*/


generateReport(...args){...}