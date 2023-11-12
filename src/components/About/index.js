import React from 'react';
import './index.scss';
import AnimatedLetters from '../AnimateLetters';
import Loader from 'react-loaders';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJs, faReact, faHtml5, faCss3Alt} from '@fortawesome/free-brands-svg-icons';

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
                    <p>My name is Mawufemor Garfo, but I prefer to go by Femor. I am a Junior at the University of Arizona pursuing a bachelor's degree in Computer Science with a minor in Game Design and Development.</p>
                    <p>Learning is my greatest passion, and I have decided to utilize that asset in my pursuit of a career in Software Engineering.</p>
                    <p>I am seeking an opportunity to work in an environment where I can offer my set of skills to a future employer and gain new experiences that will enhance these skills. 
                        I am confident that I possess the diverse tools and work ethic necessary to be a valuable asset to a team of other Software Engineers alike.</p>
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
            </div>
            <Loader type="ball-clip-rotate-pulse" />
        </>
    )
}

export default About