import { IBaseModuleInitialData } from 'types/store/modules';
import { IDataObject } from 'types/common';

export interface IActionsPayload {
    payload: {
        state: IBaseModuleInitialData['state'];
        data: IBaseModuleInitialData['data'];
        meta: IBaseModuleInitialData['meta'];
        options: IDataObject;
    };
}
