// import { apiServer } from 'settings/web-services/api';

export function getTestMain(cfg: any) {
    // return apiServer.get('/api/someUrl');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    result: {},
                },
                meta: cfg,
            });
        }, 500);
    });
}
