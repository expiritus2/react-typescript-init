/* eslint-disable no-console,@typescript-eslint/no-explicit-any */
export class Logger {
    static log(...messages: any): void {
        if (process.env.NODE_ENV === 'development') {
            console.log(...messages);
        }
    }

    static info(...messages: any): void {
        if (process.env.NODE_ENV === 'development') {
            console.info(...messages);
        }
    }

    static warn(...messages: any): void {
        if (process.env.NODE_ENV === 'development') {
            console.warn(...messages);
        }
    }

    static error(...messages: any): void {
        if (process.env.NODE_ENV === 'development') {
            console.error(...messages);
        }
    }

    static debug(...messages: any): void {
        if (process.env.NODE_ENV === 'development') {
            console.debug(...messages);
        }
    }
}
