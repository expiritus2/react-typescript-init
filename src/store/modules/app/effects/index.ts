import Api from 'store/core/Api';
import { getTestMainAction } from 'store/actions';
import { MainCfgInterface } from 'interfaces/store/effects/app';
import { getTestMain } from 'api/app';

export const getTestMainEffect = (cfg: MainCfgInterface = {}, options: any = {}, cb: Function = () => {}): Function => {
    const sendRequest = new Api({ action: getTestMainAction, method: getTestMain }).execResult();

    return sendRequest(cfg, options, cb);
};