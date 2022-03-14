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
            <p className={styles.myLogoLeft}>S</p>
            <div className={styles.myLogoRight}>
                <p>port</p>
                <p>tore</p>
            </div>
        </div>
    );
};

MyLogo.defaultProps = {
    color: 'default'
}

export default Logo;
