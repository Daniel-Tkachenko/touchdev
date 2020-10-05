import React from 'react';
import '../css/pageLogin.css';
import leftImg from '../img/loginIm1.jpg';
import LoginTitle from '../components/loginTitle';
import LoginSubTitle from '../components/loginSubTitle';
import LoginFormInput from '../components/loginFormInput';
import alg1 from '../img/alg1.svg';
import alg2 from '../img/alg2.svg';
import { Link } from 'react-router-dom';
import '../css/pageLogin.css';

export const AuthPage = () =>{
    return(
        <main className='loginMain'>
            <div className='container'>
                <div className='loginContent'>
                    <div className='loginContentLeft'>
                        <img src={leftImg} className='simpleImg' alt='leftImg' />
                    </div>
                    <div className='loginContentRight'>
                        <LoginSubTitle content='Welcome back' />
                        <LoginTitle content='Login to your account'/>

                        <form className='loginForm'>

                        <LoginFormInput label='Email' type='text' />
                        <LoginFormInput label='Password' type='password' />

                        <div className='loginFormRow'> 
                            <div className='loginFormRowLeft'>
                            <label>
                                <input type='checkbox' />
                                Remember me
                            </label>
                            </div>
                            <div className='loginFormRight'>
                            <a className='loginFormResetPass'>Forgot password?</a>
                            </div>
                        </div>

                        <input type='submit' value='Login now' className='loginFormSubmit' />

                        <div className='loginFormRow pd20'> 
                            <div className='loginFormRowLeft'>
                            <img src={alg1} />
                            </div>
                            <div className='loginFormRight'>
                            <img src={alg2} />
                            </div>
                        </div>

                        <p className='loginFormRegP'>
                            Dont have an account? <Link className='loginFormRegLink' to='/register'>Join free today</Link>
                        </p>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AuthPage;