import React from 'react'
import './NameWeb.scss'

const NameWeb = React.memo(() => {
    return (
        <div className='nameweb'>
            <div className='nameweb-left'>
                Easy
            </div>
            <div className='nameweb-right'>
                Tutor
            </div>
        </div>

    )
});
const RegisterTitle = React.memo(() => {
    return (
        <div className='register-title'>
            <div className='register-title-left'>
                Become Tutor with &nbsp;
            </div>
            <div className='register-title-mid'>
                Easy
            </div>
            <div className='register-title-right'>
                Tutor
            </div>
        </div>
    )
});
export { NameWeb, RegisterTitle };

