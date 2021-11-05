import { AxiosResponse } from 'axios';
import { IDataObject } from 'interfaces/common';

export interface IApiServerResponse<T> extends AxiosResponse<T> {
    meta: IDataObject;
}
