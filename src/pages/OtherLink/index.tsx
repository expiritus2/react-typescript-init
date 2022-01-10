import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface ComponentProps {
    className?: string;
}

const OtherLink: FC<ComponentProps> = (props) => {
    const { className } = props;

    return <div className={classNames(styles.otherLink, className)}>OtherLink</div>;
};

export default OtherLink;
