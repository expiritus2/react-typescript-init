import {
    Location, Params, NavigateFunction, PathMatch,
} from 'react-router-dom';
import { IDataObject } from 'types/common';

interface IQueryFn {
    (params: IDataObject, options: IDataObject): string;
}

export interface ILocation {
    location: Location;
    params: Params;
    navigate: NavigateFunction;
    match: PathMatch | null;
    query: IDataObject;
    setQuery: IQueryFn;
    prepareSearch: IQueryFn;
}
