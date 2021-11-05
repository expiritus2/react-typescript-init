import { AxiosResponse } from 'axios';
import { IDataObject } from 'interfaces/common';

export interface IApiServerResponse<T> {
    data: AxiosResponse<T>['data'];
    meta: IDataObject;
    status: AxiosResponse['status'];
    statusText: AxiosResponse['statusText'];
    headers: AxiosResponse['headers'];
    config: AxiosResponse['config'];
    request: AxiosResponse['request'];
}
