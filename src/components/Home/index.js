import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimateLetters';
import './index.scss';

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = [' ', 'F', 'e', 'm', 'o', 'r', ' ', 'G', 'a', 'r', 'f', 'o', ' ', '—']
    const jobArray = ['a', 'n', ' ', 'a', 's', 'p', 'i', 'r', 'i', 'n', 'g', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']
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
                        index={29}/>
                    </h1>
                    <h2>Full-Stack Developer / Actively Seeking Internship / University of Arizona student</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type="ball-clip-rotate-pulse" />
        </>
    )
}

export default Home