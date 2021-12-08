import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { useLocationHook } from 'hooks';
import { getTestMainSelector } from 'store/selectors';
import { getTestMainEffect } from 'store/modules/app/effects';
import { Logger } from 'services/Logger';

import styles from './styles.module.scss';

type ComponentProps = {
    className?: string;
};

const MainPage: FC<ComponentProps> = (props) => {
    const { className } = props;
    const dispatch = useDispatch();
    const { app } = useSelector(getTestMainSelector);
    const test = useLocationHook();

    Logger.log(app, test);

    useEffect(() => {
        dispatch(getTestMainEffect());
    }, []); // eslint-disable-line

    const onClick = () => {
        test.navigate('/other-link');
    };

    return (
        <div className={classNames(styles.wrapper, className)}>
            MainPage
            <button onClick={onClick}>Click me</button>
        </div>
    );
};

export default MainPage;
