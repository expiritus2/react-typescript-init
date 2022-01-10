import { routes } from 'settings/navigation/routes';
import { Main } from 'pages';
import OtherLink from 'pages/OtherLink';
import { INavigation } from 'types/navigation';

const commonRoutes: INavigation[] = [
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

export default commonRoutes;
