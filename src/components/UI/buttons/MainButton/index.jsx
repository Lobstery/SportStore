import React, { useState } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

import styles from './styles.module.scss'

const MainButton = ({ click, addclass, children, ...props }) => {
    const [classes, setClasses] = useState(classNames(styles.button, addclass));

    const onAddClass = classname => setClasses(prev => `${prev} ${classname}`);

    const onDeleteClass = classname => setClasses(prev => `${prev}`.replace(" " + classname, ""));

    return (
        <button
            className={classes}
            onClick={click}
            {...props}
            onMouseLeave={() => {
                onAddClass(styles.backeffect);
            }}
            onMouseEnter={() => {
                onDeleteClass(styles.backeffect);
            }}
        >
            {children}
        </button>
    )
};

MainButton.propTypes = {
    children: PropTypes.node
}

export default MainButton;
