import React, { useState } from 'react'
import classNames from 'classnames'

import Form from '../../Form'
import styles from '../styles.module.scss'
import Input from '../../inputs/Input'
import Card from '../../../Card'
import Button from '../../buttons/Button'
import { createBrand } from '../../../../http/productAPI'

const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = new useState('')

    const addBrand = (e) => {
        e.preventDefault()
        createBrand({ name: value }).then(data => setValue(''))
        onHide(false)
    }

    return (
        <div className={classNames(styles.addtype, show ? styles.active : "")}
            onClick={(e) => {
                if (e.currentTarget === e.target) onHide(false)
            }}>
            <Card width={600} className={styles.addtype__card}>
                <p className={styles.addtype__title}>Add Brand</p>
                <Button
                    click={() => onHide(false)}
                    color='orange'
                    className={styles.addtype__close_button}
                    children={'×'}>
                </Button>
                <Form className={styles.addtype__form}>
                    <p className={styles.addtype__form_inputtitle}>Brand Name</p>
                    <Input value={value} setValue={setValue} placeholder="Add brand..." />
                    <hr />
                    <Button click={e => addBrand(e)} className={styles.addtype__form_button} children="Add brand" />
                </Form>
            </Card>
        </div >
    )
}

CreateBrand.defaultProps = {
    show: false,
}

export default CreateBrand
