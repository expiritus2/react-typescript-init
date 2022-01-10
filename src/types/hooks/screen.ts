export interface IScreenProps {
    width: number;
    height: number;
    desktopWidth: boolean;
    tabletWidth: boolean;
    mobileWidth: boolean;
    mobileSmallWidth: boolean;
}

export interface IMobileOsProps {
    windowsPhone: boolean;
    android: boolean;
    ios: boolean;
}

export interface IScreen {
    screen: IScreenProps;
    mobileOS: IMobileOsProps;
    isMobile: boolean;
}
