import React, { useState } from 'react';
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const MainButton = ({ click, children, ...props }) => {
    const [classes, setClasses] = useState(styles.button);

    const onAddClass = classname => setClasses(prev => `${prev} ${classname}`);

    const onDeleteClass = classname => setClasses(prev => `${prev}`.replace(" " + classname, ""));

    return (
        <button
            className={classes}
            onClick={click}
            {...props}
            onMouseLeave={() => {
                onAddClass(styles.backeffect);
                console.log("go");
            }}
            onMouseEnter={() => {
                onDeleteClass(styles.backeffect);
                console.log("back");
            }}
        >
            {children}
        </button>
    )
};

MainButton.propTypes = {
    click: PropTypes.func.isRequired,
    children: PropTypes.node
}

export default MainButton;
