import classNames from 'classnames';
import React, { useContext } from 'react'

import { Context } from '../..';
import styles from './styles.module.scss'

const Pages = ({ className }) => {
    const { product } = useContext(Context)
    const pages = [1, 2, 3, 4, 5]

    return (
        <div className={classNames(styles.pages, className)}>
            {pages.map(page =>
                <div className={styles.pages__item}>
                    {page}
                </div>
            )}
        </div>
    )
}

Pages.defaultProps = {
    className: ''
}

export default Pages
