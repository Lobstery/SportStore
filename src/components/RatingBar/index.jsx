import React from 'react'

import styles from './styles.module.scss'

const RatingBar = ({ rate, height }) => {
    return (
        <div className={styles.bar} style={{ height: height, width: height * 5.462 }}>
            <span style={{ width: rate * height * 5.462 / 5 }}></span>
            <div></div>
        </div >
    );
};

RatingBar.defaultProps = {
    rate: 0,
    height: 25,
}

export default RatingBar
