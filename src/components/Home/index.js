import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimateLetters';
import './index.scss';
import WhiteWave from '../../assets/images/swirl.png'

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = [' ', 'F', 'e', 'm', 'o', 'r', ' ', 'G', 'a', 'r', 'f', 'o', ' ', '—']
    const jobArray = ['a', 'n', ' ', 'e', 'n', 't', 'r', 'y', ' ', 'l', 'e', , 'v', , 'e', , 'l', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1> 
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/> 
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        index={15}/>
                        <br/> 
                        <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        index={23}/>
                    </h1>
                    <h2>Prev Amazon Software Development Engineer Intern / Actively Seeking Full-Time Employment</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <div className='image'>
                    <img src={WhiteWave} alt="white wave" />
                </div>
            </div>
            <Loader type="ball-clip-rotate-pulse" />
        </>
    )
}

export default Home