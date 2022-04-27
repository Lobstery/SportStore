import React, { useState } from 'react'
import classNames from 'classnames'

import Form from '../../Form'
import styles from '../styles.module.scss'
import Input from '../../inputs/Input'
import Card from '../../../Card'
import Button from '../../buttons/Button'
import { createType } from '../../../../http/productAPI'

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = new useState('')
    const addType = (e) => {
        e.preventDefault()
        createType({ name: value }).then(data => setValue(''))
        onHide(false)
    }

    return (
        <div
            className={classNames(styles.addtype, show ? styles.active : "")}
            onClick={(e) => {
                if (e.currentTarget === e.target) onHide(false)
            }} >
            <Card width={600} className={styles.addtype__card} >
                <p className={styles.addtype__title}>Add Type</p>
                <Button
                    click={() => onHide(false)}
                    color='orange'
                    className={styles.addtype__close_button}
                    children={'×'}>
                </Button>
                <Form className={styles.addtype__form}>
                    <p className={styles.addtype__form_inputtitle}>Type Name</p>
                    <Input value={value} setValue={setValue} placeholder="Add type..." />
                    <hr />
                    <Button
                        click={e => addType(e)}
                        className={styles.addtype__form_button}
                        children="Add type"
                    />
                </Form>
            </Card>
        </div >
    )
}

CreateType.defaultProps = {
    show: false,
}

export default CreateType
