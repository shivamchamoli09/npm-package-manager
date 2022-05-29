import { IPackageReport } from './index.types';
import { oudatedPackagesCmd, sendReportToUser } from './services/package.service';

export async function generateReport(config: IPackageReport) {
    try {
        if (!config.type) config['type'] = 'json';
        const { type, to, from, password, host, port } = config;
        const report = await oudatedPackagesCmd();
        await sendReportToUser({
            type,
            to,
            from,
            password,
            report,
            host,
            port
        })
        return "Report successfully generated!";
    }
    catch (error) {
        throw error;
    }
}