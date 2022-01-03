import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from 'store';

interface ComponentProps {
    children: React.ReactNode;
}

const RootWrapper: FC<ComponentProps> = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default RootWrapper;
