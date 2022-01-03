import { RequestState } from 'settings/enums';
import { IDataObject } from 'types/common';

export interface IBaseModuleInitialData {
    state: RequestState;
    data: IDataObject | IDataObject[] | null | undefined;
    meta: IDataObject | null | undefined;
}

export interface IStoreInterface {
    app: IDataObject;
}
