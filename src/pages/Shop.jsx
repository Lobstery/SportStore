import React from 'react';
import NavBar from '../components/navbar/NavBar';
import MyButton from '../components/UI/buttons/MyButton';
// import MyButton from '../components/UI/buttons/MyButton'

const Shop = () => {
    return (
        <div className='wrapper'>
            <NavBar></NavBar>
            <MyButton >Button</MyButton>
        </div>
    );
};

export default Shop;