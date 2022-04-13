import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css'

const Logo = ({ color }) => {
    const logoClasses = {
        default: '',
        blue: styles.myLogoBodyBlue,
    }

    return (
        <div className={classNames(styles.myLogoBody, logoClasses[color])}>
            <span className={styles.myLogoLeft}>S</span>
            <div className={styles.myLogoRight}>
                <span>port</span>
                <span>tore</span>
            </div>
        </div>
    );
};

Logo.defaultProps = {
    color: 'default'
}

export default Logo;
