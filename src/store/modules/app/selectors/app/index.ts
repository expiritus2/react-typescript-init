import { createSelector } from 'reselect';
import { StoreInterface } from 'interfaces';
import { RequestState } from 'settings/enums';

const localState = ({ app }: StoreInterface) => app;

export const getTestMainSelector = createSelector(localState, (app) => ({
    isIdle: app?.state === RequestState.IDLE,
    isPending: app?.state === RequestState.PENDING,
    isError: app?.state === RequestState.ERROR,
    meta: app?.meta,
    app: app?.data,
}));
