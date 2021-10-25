import Api from 'store/effects/core/Api';
import { getTestMainAction } from 'store/actions';
import { getTestMain } from 'api/app';

export const getTestMainEffect = (cfg: any = {}, options: any = {}, cb: Function = () => {}) => {
    const sendRequest = new Api().execResult({ action: getTestMainAction, method: getTestMain });

    return sendRequest(cfg, options, cb);
};
