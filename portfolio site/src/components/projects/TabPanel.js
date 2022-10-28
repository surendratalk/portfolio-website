import React, { useState } from "react";

import "./TabPanel.css";
import TabPanelCard from "./TabPanelCard";

import UC_old from "../../images/projects/UC_old.png";
import apoorva_industries from "../../images/projects/apoorva_industries.png";
import NFT_market from "../../images/projects/NFT_market.png";
import Yummy from "../../images/projects/yummy.png";

import Portfolio from "../../images/projects/portfolio.png";
import UC_new from "../../images/projects/UC_new.png";

function TabPanel() {
    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    };

    return (
        <>
            <>
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-around mx-auto my-2">
                        <h4
                            className={showtab === 1 ? "active navtabItem" : "navtabItem"}
                            onClick={() => handletab(1)}
                        >
                            PHP
                        </h4>
                        <h4
                            className={showtab === 2 ? "active navtabItem" : "navtabItem"}
                            onClick={() => handletab(2)}
                        >
                            MERN
                        </h4>
                        <h4
                            className={showtab === 3 ? "active navtabItem" : "navtabItem"}
                            onClick={() => handletab(3)}
                        >
                            DJANGO
                        </h4>
                    </div>
                    <div className="tab-content my-3" id="pills-tabContent">
                        {/* start tab 1*/}
                        <div
                            className={
                                showtab === 1
                                    ? "tab-pane fade show active p-lg-4"
                                    : "tab-pane fade show p-lg-4"
                            }
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <TabPanelCard
                                            img={UC_old}
                                            title="Uncovercampus"
                                            subTitle="one stop solution for all needs of college students"
                                            li1="Fully responsive frontend, backend web page setup along with integrated database setup ."
                                            li2="Hand coded custom amination using css and Jquery and making the website interactive."
                                            li3="Created all the components from scratch using html, css and js "
                                            code="https://github.com/anuragkmr45/UC_new.git"
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <TabPanelCard
                                            img={apoorva_industries}
                                            title="Apoorva Industries"
                                            subTitle="Manufacturing Plastic Item Industries"
                                            li1="Fully responsive frontend, backend web page setup along with integrated database setup ."
                                            li2="This site is underdevelopment "
                                            li3="Hand coded custom amination using css and Jquery and making the website interactive."
                                            // live="https://apoorbaindustries.netlify.app/"
                                            code="https://github.com/anuragkmr45/apoorva_industries.git"
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <TabPanelCard
                                            img={NFT_market}
                                            title="NFT Market"
                                            subTitle="The website where you can buy and sell your NFTs"
                                            li1="Fully responsive frontend, backend web page setup."
                                            li2="Hand coded custom amination using css and Jquery and making the website interactive."
                                            li3="Created all the components from scratch using html, css and js "
                                            code="https://github.com/anuragkmr45/NFT_Market.git"
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <TabPanelCard
                                            img={Yummy}
                                            title="Yummy"
                                            subTitle="this is a restaurant website template"
                                            li1="Fully responsive frontend web page setup."
                                            li2="Hand coded custom amination using css and Jquery and making the website interactive."
                                            li3="Created all the components from scratch using html, css and js "
                                            code="https://github.com/anuragkmr45/Yummy.git"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* close tab 1*/}

                        {/* start tab 2*/}
                        <div
                            className={
                                showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"
                            }
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <TabPanelCard
                                            img={UC_new}
                                            title="Uncovercampus"
                                            subTitle="one stop solution for all needs of college students"
                                            li1="Fully responsive front end, back end web page setup along with integrated database setup , developed using MERN stack."
                                            li2="Hand coded custom amination using css and Jquery and making the website interactive."
                                            code="https://github.com/anuragkmr45/UC_old.git"
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <TabPanelCard
                                            img={Portfolio}
                                            title="Portfolio Website"
                                            subTitle="My portfolio website"
                                            li1="Fully responsive front end, back end web page setup."
                                            li2="Created all the components from scratch using react.js"
                                            li3="Hand coded custom amination using css and Jquery and making the website interactive."
                                            // live="https://anuragkmr45.netlify.app/"
                                            code="https://github.com/anuragkmr45/portfolio.git"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* close tab 2*/}

                        {/* start tab 3*/}
                        <div
                            className={
                                showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"
                            }
                        ></div>
                        {/* close tab 3*/}
                    </div>
                </div>
            </>
        </>
    );
}

export default TabPanel;
