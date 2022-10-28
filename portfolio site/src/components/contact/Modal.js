import React from 'react'

import './Modal.css'

import Img1 from '../../images/Hero-bg4.jpg'

import { AiOutlineLinkedin, AiFillGithub, AiFillTwitterSquare } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

function Modal() {


    const parallex = {
        backgroundImage: `url(${Img1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return (
        <>
            <section>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" style={parallex}>
                            <div className="modal-header">
                                <h1 className='mx-auto'>Reach Out !!</h1>
                                {/* <button style={{color: 'whitesmoke'}} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            </div>
                            <div className="modal-body">
                                <h4> If you have any questions, please do not hesitate to contact me via the links below</h4>
                                <div>
                                    <div className='d-flex flex-wrap justify-content-around'>
                                        <div className='contactIcon'>
                                            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/anurag-kumar-37aab221a/'>
                                                <AiOutlineLinkedin fontSize='3rem' />
                                            </a>
                                        </div>
                                        <div className='contactIcon'>
                                            <a target='_blank' rel="noreferrer" href='https://github.com/anuragkmr45'>
                                                <AiFillGithub fontSize='3rem' />
                                            </a>
                                        </div>
                                        {/* <div className='contactIcon'>
                                            <AiOutlineWhatsApp fontSize='3rem' />
                                        </div> */}
                                        <div className='contactIcon'>
                                            <a target='_blank' rel="noreferrer" href="https://twitter.com/anuragkmr45">
                                                <AiFillTwitterSquare fontSize='3rem' />
                                            </a>
                                        </div>
                                        <div className='contactIcon'>
                                            <a target='_blank' rel="noreferrer" href="https://dev.to/anuragkmr45">
                                                <FaDev fontSize='3rem' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modal
