export interface IPackageReport {
    type?: 'mail' | 'json';
    to: string;
    from: string;   
    password: string;
    host?: string;
    port?: number
}