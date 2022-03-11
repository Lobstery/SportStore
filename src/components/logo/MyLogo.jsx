import classNames from 'classnames';
import React from 'react';
import cl from './MyLogo.module.css'

const MyLogo = ({ color }) => {
    const logoClasses = {
        default: '',
        blue: cl.myLogoBodyBlue,
    }
    return (
        <div className={classNames(cl.myLogoBody, logoClasses[color])}>
            <p className={cl.myLogoLeft}>S</p>
            <div className={cl.myLogoRight}>
                <p>port</p>
                <p>tore</p>
            </div>
        </div>
    );
};

MyLogo.defaultProps = {
    color: 'default'
}

export default MyLogo;