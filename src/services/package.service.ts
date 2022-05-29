import { IUserReport } from '../packages.types';
import { execAsync } from '../scripts/exec'
import { Mailer } from '../utils/mailer';

export async function oudatedPackagesCmd() {
    return await execAsync('npm outdated');
}

export async function sendReportToUser(config: IUserReport) {
    try {
        const { type, to, from, report, password, host, port } = config;
        let reportArr = report.split("\n");
        reportArr.shift();
        let createReport = [];
        reportArr.forEach(pkg => {
            let pkgArr = pkg.split(" ");
            let i = 0;
            for (i = 0; i < pkgArr.length; i++) {
                if (pkgArr[i] === "") {
                    pkgArr.splice(i, 1);
                    i--;
                }
            }
            if (pkgArr[0] && pkgArr[1] && pkgArr[2]) {
                createReport?.push({
                    name: pkgArr[0],
                    currentVersion: pkgArr[1],
                    latestVersion: pkgArr[2]
                })
            }
        })
        let finalReport = ``;
        createReport.map((pkg, i) => {
            finalReport += `${i + 1}) ${pkg.name}:\n \tCurrent Version: ${pkg.currentVersion}\n \tLatest Version: ${pkg.latestVersion} \n\n`
        })
        if (type === 'mail') {
            const mailOptions = {
                from: from,
                to: to,
                subject: 'Package report',
                text: `Below is the report of your outdated packages: \n\n ${finalReport}`,
                password: password,
                host: host || 'smtp.gmail.com',
                port: port || 465
            };
            const mailer = new Mailer();
            await mailer.sendMail(mailOptions);
        } else if (type === 'json') {
            console.log(finalReport);
        }
    }
    catch (error) {
        throw error;
    }
}