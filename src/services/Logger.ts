/* eslint-disable */
export class Logger {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    static log(...messages: any): void {
        if (process.env.NODE_ENV === 'development') {
            console.log(...messages);
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    static info(...messages: any): void {
        if (process.env.NODE_ENV === 'development') {
            console.info(...messages);
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    static warn(...messages: any): void {
        if (process.env.NODE_ENV === 'development') {
            console.warn(...messages);
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    static error(...messages: any): void {
        if (process.env.NODE_ENV === 'development') {
            console.error(...messages);
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    static debug(...messages: any): void {
        if (process.env.NODE_ENV === 'development') {
            console.debug(...messages);
        }
    }
}
