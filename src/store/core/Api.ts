/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/ban-types */
import { RequestState } from 'settings/enums';
import { showErrorMessage } from 'helpers/errors';
import { DispatchProp } from 'react-redux';
import { ActionFunctionAny } from 'redux-actions';
import { AxiosError } from 'axios';

interface IApi {
    action?: ActionFunctionAny<any>;
    method?: Function;
}

interface IRequest {
    cfg?: any;
    options?: any;
    cb?: Function;
}

interface IResponse extends IRequest, DispatchProp {
    response: any;
    errors?: AxiosError[];
}

export default class Api {
    action: ActionFunctionAny<any> | undefined;

    method: Function | undefined;

    constructor({ action, method }: IApi) {
        this.action = action;
        this.method = method;
    }

    execResult(): Function {
        return (cfg: any = {}, options: any = {}, cb: (err: any, response: any) => void) => {
            const opts = { showError: true, silent: true, ...options };

            return this.execFunc({ cfg, options: opts, cb });
        };
    }

    execFunc({ cfg, options, cb }: IRequest): Function {
        const { showError, ...opts } = options;

        return async (dispatch: DispatchProp['dispatch']) => {
            if (!options.silent) {
                this.setPending({ dispatch });
            }

            try {
                const response = await this.method?.(cfg, opts);
                this.setData({ dispatch, cfg: { ...cfg, ...response.meta }, response, options });

                if (typeof cb === 'function') {
                    cb(null, response, dispatch);
                }

                return response;
            } catch (err) {
                const config = {
                    ...cfg,
                    status: (err as AxiosError)?.response?.status,
                    message: (err as AxiosError).message,
                };

                this.setError({
                    dispatch,
                    cfg: config,
                    response: err,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    errors: err?.response?.data?.errors,
                    options,
                });

                if (typeof cb === 'function') {
                    cb(err, null, dispatch);
                }

                if (showError) {
                    showErrorMessage(err);
                }

                throw err;
            }
        };
    }

    setPending({ dispatch }: DispatchProp): void {
        if (this.action && dispatch) {
            dispatch(this.action({ state: RequestState.PENDING }));
        }
    }

    setData({ dispatch, cfg, response, options }: IResponse): void {
        if (this.action && dispatch) {
            dispatch(
                this.action({
                    state: RequestState.READY,
                    data: response.data,
                    meta: cfg,
                    options,
                }),
            );
        }
    }

    setError({ dispatch, cfg, errors, options }: IResponse): void {
        if (this.action && dispatch) {
            dispatch(
                this.action({
                    state: RequestState.ERROR,
                    data: undefined,
                    meta: cfg,
                    errors,
                    options,
                }),
            );
        }
    }
}
