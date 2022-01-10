import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    Logger.log(app);
    useEffect(() => {
        dispatch(getTestMainEffect());
    }, []); // eslint-disable-line

    const onClick = () => {
        navigate('/other-link');
    };

    return (
        <div className={classNames(styles.mainPage, className)}>
            <button onClick={onClick}>Click Me</button>
        </div>
    );
};

export default MainPage;
