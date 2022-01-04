import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from 'store';

interface ComponentProps {
    children: ReactNode;
}

const RootWrapper: FC<ComponentProps> = ({ children }) => <Provider store={store}>{children}</Provider>;

export default RootWrapper;
