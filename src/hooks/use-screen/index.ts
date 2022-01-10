import { useContext } from 'react';

import ScreenContext from 'contexts/screen';
import { IScreen } from 'types/hooks/screen';

const useScreen = (): IScreen => useContext(ScreenContext);

export default useScreen;
