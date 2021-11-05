// import { apiServer } from 'settings/web-services/api';
import { IApiServerResponse } from 'interfaces/common/api';

export function getTestMain(cfg: any): Promise<IApiServerResponse> {
    // return apiServer.get('/api/someUrl');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    result: null,
                },
                meta: cfg,
            });
        }, 500);
    });
}
