import React, { useRef } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimateLetters';
import emailjs from '@emailjs/browser';
import WhiteWave from '../../assets/images/swirl.png'

const Contact = () => {
    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_3bt1wka',
                'template_hlua2hl',
                refForm.current,
                'gh5LDCtT_Ma8QPDRJ'
            )
            .then(
                () => {
                    alert('Email successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            index={15}
                        />
                    </h1>
                    <p>
                    I would love to hear from you! Feel free to send me an email if you have any further inquiries or just want to say hello!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type={'text'} name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type={'email'} name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type={'text'} name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type={'submit'} className='flat-button' value={'SEND'} />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='image'>
                    <img src={WhiteWave} alt="white wave" />
                </div>
            </div>
            <Loader type="ball-clip-rotate-pulse" />
        </>
    )
}

export default Contact