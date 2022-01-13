import { INavigation } from 'types/navigation';
import commonRoutes from './common';
import protectedRoutes from './protected';

const allRoutes: INavigation[] = [...commonRoutes, ...protectedRoutes];

export default allRoutes;
