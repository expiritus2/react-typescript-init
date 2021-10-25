import { RequestState } from 'enums';
import { showErrorMessage } from 'helpers/errors';
import { DispatchProp } from 'react-redux';
import { ActionFunctionAny } from 'redux-actions';

interface SendQueryInterface {
    action?: ActionFunctionAny<any>;
    method?: Function;
    cb?: Function;
    response?: any;
    cfg?: any;
    options?: any;
    errors?: any;
    dispatch?: DispatchProp['dispatch'];
}

export default class Api {
    execResult({ action, method }: SendQueryInterface) {
        return (cfg = {}, options = {}, cb: Function) => {
            const opts = { showError: true, ...options };
            return Api.execFunc({ cfg, options: opts, action, method, cb });
        };
    }

    static execFunc({ cfg, options, action, method = () => {}, cb }: SendQueryInterface) {
        const { showError, ...opts } = options;

        return async (dispatch: DispatchProp['dispatch']) => {
            if (!options.silent) {
                Api.setPending({ dispatch, action });
            }

            try {
                const response = await method(cfg, opts);
                Api.setData({ dispatch, action, cfg: { ...cfg, ...response.meta }, response });

                if (typeof cb === 'function') {
                    cb(null, response, dispatch);
                }

                return response;
            } catch (err) {
                const config = {
                    ...cfg,
                    // @ts-ignore
                    status: err?.response?.status || err?.networkError?.statusCode,
                    // @ts-ignore
                    message: err.message,
                };

                // @ts-ignore
                Api.setError({ dispatch, action, cfg: config, response: err, errors: err?.response?.data?.errors });

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

    static setPending({ dispatch, action = () => {} }: SendQueryInterface) {
        dispatch?.(action({ state: RequestState.PENDING }));
    }

    static setData({ dispatch, action = () => {}, cfg, response }: SendQueryInterface) {
        dispatch?.(action({ state: RequestState.READY, data: response.data, meta: cfg }));
    }

    static setError({ dispatch, action = () => {}, cfg, errors }: SendQueryInterface) {
        dispatch?.(action({ state: RequestState.ERROR, data: undefined, meta: cfg, errors }));
    }
}
