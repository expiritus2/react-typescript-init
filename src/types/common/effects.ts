/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-types
export interface IEffect<CFG = {}, OPTS = {}, CB = (err: any, response: any) => void> {
    (cfg?: CFG, options?: OPTS, cb?: CB): void;
}
