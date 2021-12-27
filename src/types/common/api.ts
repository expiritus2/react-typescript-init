import { AxiosResponse } from 'axios';
import { IDataObject } from 'types/common';

export interface IApiServerResponse<T> extends AxiosResponse<T> {
    meta: IDataObject;
}
