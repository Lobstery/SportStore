import React from 'react'

import styles from './styles.module.scss'

const index = () => {
    return (
        <div className={styles.body}>
            <div className={styles.bigspin}>
                <div className={styles.mediumspin}>
                    <div className={styles.smallspin}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index