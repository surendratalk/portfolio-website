import React, { useState } from "react";

import Logo from "../../images/favicon.png";

import "./Navbar.css";

import Img1 from "../../images/Hero-bg1.png";
import Modal from "../contact/Modal";

import {
    AiOutlineFundProjectionScreen,
    AiOutlineContacts,
    AiFillStar,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { CgGitFork } from "react-icons/cg";

function Navbar(props) {
    
    // const navigate = useNavigate();
    // const smoothDirect = () => {
    //     window.scroll({
    //         top: 0,
    //         left: 0,
    //         behavior: "smooth",
    //     });
    // }

    const parallex = {
        backgroundImage: `url(${Img1})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <>
            <section style={parallex}>
                <div className=" fadeInDown">
                    <nav
                        className={
                            navColour
                                ? "navbar navbar-expand-lg fixed-top sticky"
                                : "navbar navbar-expand-lg fixed-top head"
                        }
                    >
                        <div className="container-fluid">
                            <a
                                className="navbar-brand mx-5"
                                style={{ color: "rgb(203, 178, 106)" }}
                                href="/"
                            >
                                {" "}
                                <img src={Logo} alt="" style={{ height: "3rem" }} />
                                Anurag Kumar
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav mx-auto mb-lg-0">
                                    <li className="nav-item">
                                        <div
                                            className="nav-link"
                                            aria-current="page"
                                            style={{ color: "whitesmoke" }}
                                            onClick={() => window.location.replace("/#about")}
                                        >
                                            <BsPerson style={{ fontSize: "1.2rem" }} className='navIcon' />
                                            About Me
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div
                                            className="nav-link"
                                            style={{ color: "whitesmoke" }}
                                            onClick={() => window.location.replace("/#bio")}
                                        >
                                            <RiPagesLine style={{ fontSize: "1.2rem" }} className='navIcon' />
                                            My Bio
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div
                                            className="nav-link"
                                            style={{ color: "whitesmoke" }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            <AiOutlineContacts style={{ fontSize: "1.2rem" }} className='navIcon' />
                                            Contact Me
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div
                                            className="nav-link"
                                            style={{ color: "whitesmoke" }}
                                            onClick={() => window.location.replace("/#project")}
                                        >
                                            <AiOutlineFundProjectionScreen
                                                style={{ fontSize: "1.2rem" }} className='navIcon'
                                            />
                                            My Projects
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            target="_blank" rel="noreferrer"
                                            href="https://github.com/anuragkmr45/portfolio"
                                        >
                                            <div
                                                className="fork-btn-inner"
                                                style={{ color: "whitesmoke" }}
                                            >
                                                <CgGitFork style={{ fontSize: "1.2rem" }} />{" "}
                                                <AiFillStar style={{ fontSize: "1.1rem" }} />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <Modal />
        </>
    );
}

export default Navbar;
