import React from 'react'
import cl from './MyButton.module.css'
import classNames from 'classnames'

const MyButton = ({ children, color, ...props }) => {

    const btnClasses = {
        orange: cl.myButtonOrange,
        green: cl.myButtonGreen,
        blue: cl.myButtonBlue,
    }

    return (
        <button {...props} className={classNames(cl.myButton, btnClasses[color])} >
            {children}
        </button>
    )
}

MyButton.defaultProps = {
    color: 'blue'
}
export default MyButton