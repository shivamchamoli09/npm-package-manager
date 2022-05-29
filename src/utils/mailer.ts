import { exec } from 'child_process';
import { nodemailer } from 'nodemailer';


export class Mailer {
    private _mailer: any;

    constructor() {
        this._mailer = require('nodemailer');
    }


    public sendMail(mailOptions: any) {
        return new Promise((resolve, reject) => {
            this._mailer.createTransport({
                host: mailOptions?.host,
                port: mailOptions?.port,
                secure: true,
                auth: {
                    user: mailOptions?.from,
                    pass: mailOptions?.password
                }
            }).sendMail(mailOptions, (err: any, info: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(info);
                }
            });
        });
    }
}