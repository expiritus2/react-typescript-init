import queryString from 'query-string';
import { IDataObject } from '../types';

interface ILocation {
    search: string;
    pathname: string;
}

export class LocationService {
    location: ILocation;

    constructor(location: ILocation) {
        this.location = location;
    }

    setLocation(location: ILocation): void {
        this.location = location;
    }

    getQuery(options = {}): IDataObject {
        return queryString.parse(this.location.search, { parseNumbers: true, parseBooleans: true, ...options });
    }

    setQuery(params: IDataObject, options = {}): string {
        const query = this.prepareSearch(params, options);
        return this.createUrlWithQuery(query);
    }

    prepareSearch(params: IDataObject, options = {}): string {
        if (!Object.keys(params || {}).length) {
            return '';
        }

        const search = this.getQuery(options);
        return queryString.stringify({ ...search, ...params }, { sort: false, skipEmptyString: true, ...options });
    }

    createUrlWithQuery(query: string): string {
        return `${this.location.pathname}?${query}`;
    }
}
