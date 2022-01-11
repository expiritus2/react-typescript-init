import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';
import './styles.scss';

interface ComponentProps {
    className?: string;
    loaderClassName?: string;
}

const Spinner: FC<ComponentProps> = ({ className, loaderClassName }) => (
    <div className={classNames(styles.spinner, className)}>
        <div className={classNames(styles.loader, 'loader', loaderClassName)}>Loading...</div>
    </div>
);

export default Spinner;
