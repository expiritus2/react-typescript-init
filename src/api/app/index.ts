// import { apiServer } from 'settings/web-services/api';
import { IApiServerResponse } from 'types/common/api';
import { ITestMainData } from './interfaces';

export function getTestMain(cfg: any): Promise<IApiServerResponse<ITestMainData>> {
    // return apiServer.get('/api/someUrl');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    result: null,
                },
                status: 200,
                statusText: 'OK',
                headers: {},
                config: {},
                request: null,
                meta: cfg,
            });
        }, 500);
    });
}
