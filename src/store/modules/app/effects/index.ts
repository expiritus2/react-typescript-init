import Api from 'store/core/Api';
import { TestMainRequestInterface } from 'interfaces/api/app';
import { getTestMainAction } from 'store/actions';
import { getTestMain } from 'api/app';

export const getTestMainEffect = (cfg: TestMainRequestInterface = {}, options: any = {}, cb: Function = () => {}) => {
    const sendRequest = new Api().execResult({ action: getTestMainAction, method: getTestMain });

    return sendRequest(cfg, options, cb);
};
