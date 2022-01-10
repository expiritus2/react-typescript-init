/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IEffect<CFG = {}, OPTS = {}, CB = (err: any, response: any) => void> {
    (cfg?: CFG, options?: OPTS, cb?: CB): Function;
}
