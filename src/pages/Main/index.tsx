import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { getTestMainEffect } from 'store/modules/app/effects';
import styles from './styles.module.scss';

type ComponentProps = {
    className: string;
};

const MainPage: FC<ComponentProps> = (props) => {
    const { className } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTestMainEffect());
    }, []); // eslint-disable-line

    return <div className={classNames(styles.wrapper, className)}>MainPage</div>;
};

export default MainPage;
