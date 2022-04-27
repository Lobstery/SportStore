import React, { useState } from 'react'

import Container from '../../components/Container'
import Button from '../../components/UI/buttons/Button'
import CreateBrand from '../../components/UI/modals/CreateBrand'
import CreateProduct from '../../components/UI/modals/CreateProduct'
import CreateType from '../../components/UI/modals/CreateType'
import styles from './styles.module.scss'

const Admin = () => {
    const [showCreateType, setShowCreateType] = new useState(false)
    const [showCreateBrand, setShowCreateBrand] = new useState(false)
    const [showCreateProduct, setShowCreateProduct] = new useState(false)

    return (
        <Container>
            <div className={styles.column}>
                <Button
                    click={() => setShowCreateType(true)}
                    className={styles.column__button}
                    color="orange"
                    children={"Add Type"} />
                <Button
                    click={() => setShowCreateBrand(true)}
                    className={styles.column__button}
                    color="orange"
                    children={"Add Brand"} />
                <Button
                    click={() => setShowCreateProduct(true)}
                    className={styles.column__button}
                    color="orange"
                    children={"Add Product"} />
            </div>
            <CreateType show={showCreateType} onHide={setShowCreateType} />
            <CreateBrand show={showCreateBrand} onHide={setShowCreateBrand} />
            <CreateProduct show={showCreateProduct} onHide={setShowCreateProduct} />
        </Container>
    )
}

export default Admin
