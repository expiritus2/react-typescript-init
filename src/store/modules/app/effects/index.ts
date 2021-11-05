import Api from 'store/core/Api';
import { getTestMainAction } from 'store/actions';
import { IMainCfg } from 'interfaces/store/effects/app';
import { IEffect } from 'interfaces/common/effects';
import { getTestMain } from 'api/app';

export const getTestMainEffect: IEffect<IMainCfg> = (cfg, options, cb): Function => {
    const sendRequest = new Api({ action: getTestMainAction, method: getTestMain }).execResult();

    return sendRequest(cfg, options, cb);
};
