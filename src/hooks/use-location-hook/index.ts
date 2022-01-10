import {
    useLocation, useParams, useNavigate, useMatch,
} from 'react-router-dom';
import { LocationService } from 'services/Location';
import { ILocation } from '../../types/hooks/location';

interface Options {
    matchPath?: string;
}

const useLocationHook = (options: Options = {}): ILocation => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const match = useMatch(options.matchPath || '');

    const locationSrv = new LocationService(location);

    return {
        location,
        params,
        navigate,
        match,
        query: locationSrv.getQuery(options),
        setQuery: locationSrv.setQuery,
        prepareSearch: locationSrv.prepareSearch,
    };
};

export default useLocationHook;
