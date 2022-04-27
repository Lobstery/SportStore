import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'

import Form from '../../Form'
import styles from '../styles.module.scss'
import Input from '../../inputs/Input'
import Card from '../../../Card'
import Button from '../../buttons/Button'
import Dropdown from '../../inputs/Dropdown'
import { Context } from '../../../..'
import { createProduct, fetchBrands, fetchTypes } from '../../../../http/productAPI'

const CreateProduct = ({ show, onHide }) => {
    const { product } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [brand, setBrand] = useState(null)
    const [type, setType] = useState(null)
    const [info, setInfo] = new useState([])

    useEffect(() => {
        fetchTypes().then(data => {
            product.setTypes(data)
        })
        fetchBrands().then(data => {
            product.setBrands(data)
        })
    }, [])


    const addInfo = () => {
        setInfo([...info, { title: '', description: '', id: Date.now() }])
    }
    const deleteInfo = (id) => {
        setInfo(info.filter(i => i.id != id))
    }

    const selectFile = e => {
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, id) => {
        setInfo(info.map(item => item.id === id ? { ...item, [key]: value } : item))
    }

    const addProduct = (e) => {
        console.log(info)
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('img', file)
        formData.append('brandId', brand)
        formData.append('typeId', type)
        formData.append('info', JSON.stringify(info))
        createProduct(formData).then(data => onHide(false))
    }

    return (
        <div
            className={classNames(styles.addtype, show ? styles.active : "")}
            onClick={(e) => {
                if (e.currentTarget === e.target) onHide(false)
            }} >
            <Card width={600} className={styles.addtype__card} >
                <p className={styles.addtype__title}>Add Product</p>
                <Button
                    click={() => onHide(false)}
                    color='orange'
                    className={styles.addtype__close_button}
                    children={"×"}>
                </Button>
                <Form className={styles.addtype__form}>
                    <p className={styles.addtype__form_inputtitle}>Product Name</p>
                    <Input
                        placeholder="Product name..."
                        value={name} setValue={setName}
                    />
                    <div className={styles.addtype__form_row}>
                        <Dropdown
                            title={'Select Type...'}
                            items={product.types}
                            setValue={setType}
                        />
                        <Dropdown
                            className={styles.addtype__form_brands}
                            title={'Select Brand...'}
                            items={product.brands}
                            setValue={setBrand}
                        />
                        <Input
                            type='number'
                            placeholder={"Price..."}
                            value={price}
                            setValue={setPrice}
                        />
                    </div>
                    <div className={styles.addtype__form_row}>
                        <p className={styles.addtype__form_inputtitle}>Image</p>
                        <input
                            className={styles.addtype__form_image}
                            type='file'
                            onChange={e => selectFile(e)}
                            placeholder='Slect Image'
                        />
                    </div>
                    <hr />
                    <Button click={(e) => { e.preventDefault(); addInfo() }} children="Add new characteristic" />
                    <hr />
                    <div className={styles.description}>
                        {
                            info.map(item =>
                                <div key={item.id} className={styles.addtype__form_row}>
                                    <Input
                                        placeholder='Title...'
                                        value={item.title}
                                        setCharacteristic={(e) => changeInfo('title', e.target.value, item.id)}
                                    />
                                    <Input
                                        placeholder='Description...'
                                        value={item.description}
                                        setCharacteristic={(e) => changeInfo('description', e.target.value, item.id)}
                                    />
                                    <Button
                                        click={(e) => {
                                            e.preventDefault()
                                            deleteInfo(item.id)
                                        }}
                                        className={styles.description__button}
                                        children='Delete'
                                    />
                                </div>
                            )
                        }
                    </div>
                    <Button
                        className={styles.addtype__form_button}
                        click={e => addProduct(e)}
                        children="Add Product"
                    />
                </Form>
            </Card>
        </div >
    )
}

CreateProduct.defaultProps = {
    show: false,
}

export default CreateProduct
