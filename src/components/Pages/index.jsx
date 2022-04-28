import classNames from 'classnames';
import React, { useContext, useState } from 'react'

import { Context } from '../..';
import styles from './styles.module.scss'

const Pages = ({ totalCount, className, activePage, setActivePage }) => {
    const { product } = useContext(Context)
    const pageCount = Math.ceil(totalCount / product.limit)
    const pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classNames(styles.pages, className)}>
            {pages.map(page =>
                <div
                    key={page}
                    className={classNames(styles.pages__item, activePage == page && styles.active)}
                    onClick={() => {
                        product.setPage(page)
                        setActivePage(page)
                    }}>
                    {page}
                </div>
            )}
        </div>
    )
}

Pages.defaultProps = {
    className: '',
    totalCount: 0
}

export default Pages
