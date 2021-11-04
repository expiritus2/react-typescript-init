import Api from 'store/core/Api';
import { getTestMainAction } from 'store/actions';
import { MainCfgInterface } from 'interfaces/store/effects/app';
import { EffectProps } from 'interfaces/common/effects';
import { getTestMain } from 'api/app';

export const getTestMainEffect: EffectProps<MainCfgInterface> = (cfg, options, cb): Function => {
    const sendRequest = new Api({ action: getTestMainAction, method: getTestMain }).execResult();

    return sendRequest(cfg, options, cb);
};
