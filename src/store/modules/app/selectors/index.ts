import { createSelector } from 'reselect';
import { IStoreInterface } from 'types/store/modules';
import { RequestState } from 'settings/enums';
import { IDataObject } from 'types';

const localState = ({ app }: IStoreInterface): IDataObject => app;

export const getTestMainSelector = createSelector(localState, (app) => ({
    isIdle: app?.state === RequestState.IDLE,
    isPending: app?.state === RequestState.PENDING,
    isReady: app?.state === RequestState.READY,
    isError: app?.state === RequestState.ERROR,
    meta: app?.meta,
    app: app?.data,
}));
