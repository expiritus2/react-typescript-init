import { useEffect, useState, useCallback } from 'react';
import { Screen } from 'settings/enums';
import { getMobileOperatingSystem } from 'contexts/screen';
import { IScreen } from 'types/hooks/screen';

const useResize = (): IScreen => {
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        desktopWidth: window.innerWidth > Screen.DESKTOP,
        tabletWidth: window.innerWidth <= Screen.DESKTOP && window.innerWidth > Screen.MOBILE,
        mobileWidth: window.innerWidth <= Screen.MOBILE,
        mobileSmallWidth: window.innerWidth <= Screen.MOBILE_SMALL,
    });

    const handleResize = useCallback(() => {
        const { innerWidth, innerHeight } = window;

        const width = innerWidth;
        const height = innerHeight;
        const desktopWidth = width > Screen.DESKTOP;
        const tabletWidth = width <= Screen.DESKTOP && width > Screen.MOBILE;
        const mobileWidth = width <= Screen.MOBILE;
        const mobileSmallWidth = width <= Screen.MOBILE_SMALL;

        setScreen({
            width,
            height,
            desktopWidth,
            tabletWidth,
            mobileWidth,
            mobileSmallWidth,
        });
    }, []);

    const mobileOS = getMobileOperatingSystem();
    const isMobile = Object.values(mobileOS).some((os) => os);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []); // eslint-disable-line

    return { screen, mobileOS, isMobile };
};

export default useResize;
