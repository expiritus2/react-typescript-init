import { IDataObject } from '../common';

export interface IScreen {
    screen: IDataObject;
    mobileOS: IDataObject;
    isMobile: boolean;
}

export interface IMobileOs {
    windowsPhone: boolean;
    android: boolean;
    ios: boolean;
}
