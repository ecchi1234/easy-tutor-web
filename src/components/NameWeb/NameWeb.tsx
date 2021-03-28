import React from 'react'
import './NameWeb.scss'
import { Checkbox } from 'antd';

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

const RegisterFooter = React.memo(() => {
    return (
        <div className='register-footer'>
            <div className='register-footer-text'>
                Already have account?
            </div>
            <div className='register-footer-link'>
                &nbsp;Login
            </div>
        </div>
    )
});

const RegisterTitleNormal = React.memo(() => {
    return (
        <div className='register-title-normal'>
            <div className='register-title-normal-left'>
                Register to &nbsp;
            </div>
            <div className='register-title-normal-mid'>
                Easy
            </div>
            <div className='register-title-normal-right'>
                Tutor
            </div>
        </div>
    )
});


const LoginTitle = React.memo(() => {
    return (
        <div className='login-title'>
            Login to your account
        </div>
    )
});

const LoginBody = React.memo(() => {
    return (
        <div className='login-body'>
            <div className='login-checkbox'>
            <Checkbox></Checkbox>
            </div>
            <div className='login-left'>
                Remember me
            </div>
            <div className='login-right'>
                Forgot Password
            </div>
        </div>
    )
});

const LoginFooter = React.memo(() => {
    return (
        <div className='register-footer'>
            <div className='register-footer-text'>
                New to EasyTutor?
            </div>
            <div className='register-footer-link'>
                &nbsp;Register
            </div>
        </div>
    )
});
const FindTutorTitle = React.memo(() => {
    return (
        <div className="find-tutor-title">
            <div className="text-1">
                Muốn tìm gia sư phù hợp để mời dạy ? 
            </div>
            <div className="text-2">
                <div className="text-2-left">Search among&nbsp;</div>
                <div className="text-2-mid"> 24982 </div>
                <div className="text-2-right">&nbsp;offers from the best employers in the world</div>
                
           </div>
        </div>
    )
}

);
export { NameWeb, RegisterTitle, RegisterFooter, LoginTitle,LoginBody,LoginFooter,RegisterTitleNormal,FindTutorTitle};

