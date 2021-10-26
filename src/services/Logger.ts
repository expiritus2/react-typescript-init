/* eslint-disable no-console */
export class Logger {
    static log(...messages: any) {
        if (process.env.NODE_ENV === 'development') {
            console.log(...messages);
        }
    }

    static info(...messages: any) {
        if (process.env.NODE_ENV === 'development') {
            console.info(...messages);
        }
    }

    static warn(...messages: any) {
        if (process.env.NODE_ENV === 'development') {
            console.warn(...messages);
        }
    }

    static error(...messages: any) {
        if (process.env.NODE_ENV === 'development') {
            console.error(...messages);
        }
    }

    static debug(...messages: any) {
        if (process.env.NODE_ENV === 'development') {
            console.debug(...messages);
        }
    }
}
