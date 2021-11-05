import { createSelector } from 'reselect';
import { IStoreInterface } from 'interfaces';
import { RequestState } from 'settings/enums';

const localState = ({ app }: IStoreInterface) => app;

export const getTestMainSelector = createSelector(localState, (app) => ({
    isIdle: app?.state === RequestState.IDLE,
    isPending: app?.state === RequestState.PENDING,
    isReady: app?.state === RequestState.READY,
    isError: app?.state === RequestState.ERROR,
    meta: app?.meta,
    app: app?.data,
}));
