import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

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

    Logger.log(app);

    useEffect(() => {
        dispatch(getTestMainEffect());
    }, []); // eslint-disable-line

    return <div className={classNames(styles.wrapper, className)}>MainPage</div>;
};

export default MainPage;
