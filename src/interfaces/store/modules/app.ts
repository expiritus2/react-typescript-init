import { RequestState } from 'enums';

type DataObject = { [key: string]: any };

export interface BaseModuleInitialData {
    state: RequestState;
    data: DataObject | DataObject[] | null | undefined;
    meta: DataObject | null | undefined;
}

export interface ActionsPayload {
    payload: BaseModuleInitialData;
}
