import { useLocation } from 'react-router-dom';
import { LocationService } from 'services/Location';

const locationSrv = new LocationService();

const useLocationHook = (options = {}) => {
    const location = useLocation();
    locationSrv.setLocation(location);

    return {
        location,
        query: locationSrv.getQuery(options),
        setQuery: locationSrv.setQuery,
        prepareSearch: locationSrv.prepareSearch,
    };
};

export default useLocationHook;
