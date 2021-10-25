import { ActionsPayload, BaseModuleInitialData } from 'interfaces';
import { RequestState } from 'enums';
import { handleActions } from 'redux-actions';
import { getTestMainAction } from 'store/actions';

const initialData: BaseModuleInitialData = {
    state: RequestState.IDLE,
    data: null,
    meta: {},
};

export default handleActions(
    {
        [getTestMainAction.toString()]: (state: any, { payload }: ActionsPayload) => ({
            state: payload.state,
            data: null,
            meta: {},
        }),
    },
    initialData,
);
