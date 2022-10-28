import React from 'react'

import './TabPanelCard.css'

function TabPanelCard(props) {
    return (
        <>
            <div className="card m-lg-3">
                <img src={props.img} className="card-img-top p-3" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <h5 className="card-subTitle">{props.subTitle}</h5>
                    <div>
                        <h5 style={{textAlign: 'left', color: 'rgb(203, 178, 106)'}}>Key Features</h5>
                        <ul style={{textAlign: 'left'}}>
                            <li>{props.li1}</li>
                            <li>{props.li2}</li>
                            <li>{props.li3}</li>
                        </ul>
                    </div>
                    {/* <div>
                        <h5>Technology Used</h5>
                    </div> */}
                    <div className="btnGrp">
                        <div className="d-flex flex-wrap justify-content-around">
                            {/* <a style={{ textDecoration: 'none'}} rel="noreferrer" target='_blank' href={props.live}>
                                <div className="btns">
                                    <h5>Live Demo</h5>
                                </div>
                            </a> */}
                            <a style={{ textDecoration: 'none'}} rel="noreferrer" target='_blank' href={props.code}>
                                <div className="btns">
                                    <h5>Source Code</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabPanelCard
