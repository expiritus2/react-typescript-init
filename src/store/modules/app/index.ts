import { IActionsPayload, IBaseModuleInitialData } from 'interfaces';
import { RequestState } from 'settings/enums';
import { handleActions } from 'redux-actions';
import { getTestMainAction } from 'store/actions';
import { get } from 'lodash-es';

const initialData: IBaseModuleInitialData = {
    state: RequestState.IDLE,
    data: null,
    meta: {},
};

export default handleActions(
    {
        [getTestMainAction.toString()]: (state: any, { payload }: IActionsPayload) => ({
            state: get(payload, 'state', initialData.state),
            data: get(payload, 'data.result', initialData.data),
            meta: get(payload, 'meta', initialData.meta),
        }),
    },
    initialData,
);
