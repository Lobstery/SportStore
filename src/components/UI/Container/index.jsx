import React from 'react';

import styles from './styles.module.scss'

const Container = ({ style, props, children }) => {
    return (
        <div className={styles.container} style={style} {...props}>
            {children}
        </div>
    );
};

export default Container;
