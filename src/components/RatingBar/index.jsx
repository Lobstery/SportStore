import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..';

import { createRating, fetchOneProductRating } from '../../http/productAPI';
import styles from './styles.module.scss'

const RatingBar = ({height, productId, enabled }) => {
    const {user} = useContext(Context)
    const [rating, setRating] = useState(0)
    const [currentRating, setCurrentRating] = useState(0)
    const [mousePressed, setMousePressed] = useState(false)
    const width = currentRating !== 0 ? currentRating * height * 1.0924 : rating * height * 1.0924

    useEffect(()=>{
        fetchOneProductRating(productId).then(data=>setRating(data))
    }, [productId])

    function mouseMove(e) {
        const bounds = e.target.getBoundingClientRect();
        var x = e.clientX - bounds.left;
        setCurrentRating(Math.ceil((100 * x / (height * 5.462)) / 20))
    }

    return (
        <div className={styles.bar} style={{ height: height, width: height * 5.462 }}>
            <span className={mousePressed ? styles.active : ""} style={{ width: width }}></span>
            <div
                onMouseDown={() => enabled && setMousePressed(true)}
                onMouseUp={() => enabled && setMousePressed(false)}
                onClick={() =>
                    // console.log(user.user.id)
                    enabled && user.user.id && 
                    createRating({ userId: user.user.id, productId, rate: currentRating }).then(data => {
                        setRating(data)
                    })
                }
                onMouseMove={(e) => {
                    enabled && mouseMove(e)
                }}
                onMouseLeave={() => enabled && setCurrentRating(rating)}
            >
            </div>
        </div >
    )
}

RatingBar.defaultProps = {
    rate: 0,
    productId: 0,
    height: 25,
    enabled: false,
}

export default RatingBar
