export function getTestMain(cfg: any) {
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
