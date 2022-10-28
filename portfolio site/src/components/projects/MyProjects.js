import React from 'react'

import TabPanel from './TabPanel'

import Img1 from '../../images/Hero-bg3.png' 

function MyProjects() {
    
    const parallex = {
        backgroundImage: `url(${Img1})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <>
        <section className='py-5' id='project' style={parallex}>
            <div className='text-center'>
                <h4 style={{color: '#cbb26a'}}>CASE STUDIES</h4>
                <h2>Project Work</h2>
                <h5 className='my-4'><a className='link btns' style={{ color: 'rgb(203, 178, 106)'}} rel="noreferrer" target='_blank'href='https://github.com/anuragkmr45'>All Projects and Collaboration Work</a></h5>
                <TabPanel />
            </div>
        </section>
        </>
    )
}

export default MyProjects
