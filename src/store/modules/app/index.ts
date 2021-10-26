import { ActionsPayload, BaseModuleInitialData } from 'interfaces';
import { RequestState } from 'settings/enums';
import { handleActions } from 'redux-actions';
import { getTestMainAction } from 'store/actions';
import { get } from 'lodash-es';

const initialData: BaseModuleInitialData = {
    state: RequestState.IDLE,
    data: null,
    meta: {},
};

export default handleActions(
    {
        [getTestMainAction.toString()]: (state: any, { payload }: ActionsPayload) => ({
            state: get(payload, 'state', initialData.state),
            data: get(payload, 'data.result', initialData.data),
            meta: get(payload, 'meta', initialData.meta),
        }),
    },
    initialData,
);
