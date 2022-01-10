import { routes } from 'settings/navigation/routes';
import { Main } from 'pages';
import OtherLink from 'pages/OtherLink';

export default [
    {
        path: routes.index,
        Component: Main,
        roles: [],
    },
    {
        path: routes.otherLink,
        Component: OtherLink,
        roles: [],
    },
];
