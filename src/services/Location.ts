import queryString from 'query-string';

interface LocationInterface {
    search: string;
    pathname: string;
}

export class LocationService {
    location: LocationInterface;

    constructor(location: LocationInterface) {
        this.location = location;
    }

    setLocation(location: LocationInterface) {
        this.location = location;
    }

    getQuery(options = {}) {
        return queryString.parse(this.location.search, { parseNumbers: true, parseBooleans: true, ...options });
    }

    setQuery(params: any, options = {}) {
        const query = this.prepareSearch(params, options);
        return this.createUrlWithQuery(query);
    }

    prepareSearch(params: any, options = {}) {
        if (!Object.keys(params || {}).length) {
            return '';
        }

        const search = this.getQuery(options);
        return queryString.stringify({ ...search, ...params }, { sort: false, skipEmptyString: true, ...options });
    }

    createUrlWithQuery(query: any) {
        return `${this.location.pathname}?${query}`;
    }
}
