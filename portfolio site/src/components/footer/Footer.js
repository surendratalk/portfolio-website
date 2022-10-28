import React from 'react'

import './footer.css'

import { BsInstagram, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';


function Footer() {
    return (
        <>
            <footer className="py-4">
                <div className='d-flex justify-content-center flex-wrap'>
                    <div className='mx-3'>
                        <h5><AiOutlineMail /> anurag45kmr@gmail.com</h5>
                    </div>
                    <div className='mx-3'>
                        <h5><AiOutlinePhone /> +91 9354665870</h5>
                    </div>
                </div>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="https://www.instagram.com/anuragkmr_45/" target='_blank'  rel="noreferrer" className="nav-link px-2 text-muted"><BsInstagram fontSize='2rem' /></a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/anurag-kumar-37aab221a/" target='_blank'  rel="noreferrer" className="nav-link px-2 text-muted"><BsLinkedin fontSize='2rem' /></a></li>
                    <li className="nav-item"><a href="https://github.com/anuragkmr45" target='_blank'  rel="noreferrer" className="nav-link px-2 text-muted"><BsGithub fontSize='2rem' /></a></li>
                    <li className="nav-item"><a href="https://twitter.com/anuragkmr45" target='_blank'  rel="noreferrer" className="nav-link px-2 text-muted"><BsTwitter fontSize='2rem' /></a></li>
                    <li className="nav-item"><a href="https://dev.to/anuragkmr45" target='_blank'  rel="noreferrer" className="nav-link px-2 text-muted"><FaDev fontSize='2rem' /></a></li>
                </ul>
                <p className="text-center text-muted">Designed & Developed by Anurag Kumar </p>
                <p className="text-center text-muted">©  Copyright 2022, ALL RIGHTS RESERVED</p>
            </footer>
        </>
    )
}

export default Footer
