import axios from 'axios';

const getDevelopmentApiLink = (): string => 'http://localhost:3000';
const getProductionApiLink = (): string | undefined => process.env.REACT_APP_API_ENDPOINT;

export const apiServer = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? getProductionApiLink() : getDevelopmentApiLink(),
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
