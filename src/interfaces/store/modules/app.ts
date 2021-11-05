import { RequestState } from 'settings/enums';
import { IDataObject } from 'interfaces/common';

export interface IBaseModuleInitialData {
    state: RequestState;
    data: IDataObject | IDataObject[] | null | undefined;
    meta: IDataObject | null | undefined;
}

export interface IActionsPayload {
    payload: {
        state: IBaseModuleInitialData['state'];
        data: IBaseModuleInitialData['data'];
        meta: IBaseModuleInitialData['meta'];
        options: IDataObject;
    };
}

export interface IStoreInterface {
    app: IDataObject;
}
