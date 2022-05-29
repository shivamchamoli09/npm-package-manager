export interface IUserReport {
    type: 'mail' | 'json';
    to: string;
    from: string;
    report: any;
    password: string;
    host?: string;
    port?: number
}