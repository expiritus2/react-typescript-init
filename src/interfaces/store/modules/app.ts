import { RequestState } from 'settings/enums';
import { DataObject } from 'interfaces/common';

export interface BaseModuleInitialData {
    state: RequestState;
    data: DataObject | DataObject[] | null | undefined;
    meta: DataObject | null | undefined;
}

export interface ActionsPayload {
    payload: {
        state: BaseModuleInitialData['state'];
        data: BaseModuleInitialData['data'];
        meta: BaseModuleInitialData['meta'];
        options: DataObject;
    };
}

export interface StoreInterface {
    app: DataObject;
}
