import { AxiosResponse } from 'axios';
import { IDataObject } from 'interfaces/common';

interface IData {
    result?: IDataObject | IDataObject[] | null;
}

export interface IApiServerResponse {
    data: AxiosResponse<IData | Array<any>>['data'];
    meta: IDataObject;
    status?: AxiosResponse['status'];
    statusText?: AxiosResponse['statusText'];
    headers?: AxiosResponse['headers'];
    config?: AxiosResponse['config'];
    request?: AxiosResponse['request'];
}
