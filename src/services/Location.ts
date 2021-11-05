import queryString from 'query-string';

interface ILocation {
    search: string;
    pathname: string;
}

export class LocationService {
    location: ILocation;

    constructor(location: ILocation) {
        this.location = location;
    }

    setLocation(location: ILocation) {
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
