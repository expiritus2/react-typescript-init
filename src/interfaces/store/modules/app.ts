import { RequestState } from 'settings/enums';
import { DataObject } from 'interfaces/common';

export interface BaseModuleInitialData {
    state: RequestState;
    data: DataObject | DataObject[] | null | undefined;
    meta: DataObject | null | undefined;
}

export interface ActionsPayload {
    payload: BaseModuleInitialData;
}

export interface StoreInterface {
    app: DataObject;
}
