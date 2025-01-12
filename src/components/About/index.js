import React from 'react';
import './index.scss';
import AnimatedLetters from '../AnimateLetters';
import Loader from 'react-loaders';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJs, faReact, faHtml5, faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import WhiteWave from '../../assets/images/swirl.png'

const About = () => {
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            index={15}
                        />
                    </h1>
                    <div className='paragraph'>
                        <p>My name is Mawufemor Garfo, but I prefer to go by Femor. I am a recent Computer Science B.A. graduate of the University of Arizona.
                            I love playing volleyball, cooking, thrifting, playing the drums/guitar, and socializing!</p>
                        <p>Dating back to high school, my love for software and hardware development blossomed most when my work did some good for people. My pursuit 
                            in this career has been to provide and aid in building a service that is impactful to the lives of many. I have and 
                            will continue to mold and adapt myself to stay abreast with the growing industry of Software Engineering in order to do so. </p>
                        <p>I bring motivation, passion, and a track record of delivering high quality work, and I am confident that my contribution will 
                            aid to improve the overall service and success of my potential team.</p>
                    </div>
                </div>

                <div className='stage-cont'>
                    <div className='skill1'>
                        <FontAwesomeIcon icon={faPython} color='yellow' />
                    </div>
                    <div className='skill2'>
                        <FontAwesomeIcon icon={faJava} color='orange' />
                    </div>
                    <div className='skill3'>
                        <FontAwesomeIcon icon={faJs} color='yellow' />
                    </div>
                    <div className='skill4'>
                        <FontAwesomeIcon icon={faReact} color='blue' />
                    </div>
                    <div className='skill5'>
                        <FontAwesomeIcon icon={faHtml5} color='orange' />
                    </div>
                    <div className='skill6'>
                        <FontAwesomeIcon icon={faCss3Alt} color='blue' />
                    </div>
                    <div className='resume'>
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

export default About