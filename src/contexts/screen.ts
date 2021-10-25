import { createContext } from 'react';
import { Screen } from 'enums';

const { innerWidth, innerHeight } = window;

const width = innerWidth;
const height = innerHeight;
const desktopWidth = width > Screen.DESKTOP;
const tabletWidth = width <= Screen.DESKTOP && width > Screen.MOBILE;
const mobileWidth = width <= Screen.MOBILE;
const mobileSmallWidth = width <= Screen.MOBILE_SMALL;

export function getMobileOperatingSystem() {
    // @ts-ignore
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const result = {
        windowsPhone: false,
        android: false,
        ios: false,
    };

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        result.windowsPhone = true;
    }

    if (/android/i.test(userAgent)) {
        result.android = true;
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    // @ts-ignore
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        result.ios = true;
    }

    return result;
}

const mobileOS = getMobileOperatingSystem();

export default createContext({
    screen: {
        width,
        height,
        desktopWidth,
        tabletWidth,
        mobileWidth,
        mobileSmallWidth,
    },
    mobileOS,
    isMobile: Object.values(mobileOS).some((os) => os),
});
