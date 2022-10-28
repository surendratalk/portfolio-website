import React from "react";

import Bg1 from "../../images/Hero-bg1.png";
import Vector2 from "../../images/vector-2.png";

import "./Bio.css";

function Bio() {
    const parallex = {
        backgroundImage: `url(${Bg1})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <>
            <section className="py-5" id="bio" style={parallex}>
                <div className="container">
                    <h1
                        className="text-center"
                        style={{ color: "rgb(203, 178, 106)", fontWeight: "bolder" }}
                    >
                        My Bio
                    </h1>
                    <div className="row pt-5">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <a
                                href="https://www.geeksforgeeks.org/what-is-full-stack-development/"
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="text-center">
                                    <h2 className="field py-3"> Full Stack developer</h2>
                                </div>
                            </a>

                            <a
                                href="https://aws.amazon.com/devops/what-is-devops/"
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="mt-3 text-center">
                                    <h2 className="field py-3">
                                        DevOps Engineer
                                    </h2>
                                </div>
                            </a>

                            <a
                                href="https://www.redhat.com/en/topics/open-source/what-is-open-source"
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="mt-3 text-center">
                                    <h2 className="field py-3">Open Source Developer </h2>
                                </div>
                            </a>

                            <div className="text-center">
                                <img src={Vector2} style={{ height: "20rem" }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 px-2 text-center">
                            <div className="container">
                                <p>
                                    I'm a Full Stack developer based in Odisha, India. With a
                                    focus on FrontEnd as well as BackEnd Development. I am
                                    well-versed in a variety of front end as well as backend and
                                    programming languages, responsive frameworks, and database
                                    management systems. My goal is simple to use my development
                                    and programming skills to improve corporate performance as an
                                    developer.
                                </p>
                                <p>
                                    Although I am well-versed in a variety of programming
                                    languages, my core expertise is in MERN Stack, JAVA,
                                    JavaScript, React.js, Python, MySql, and MongoDB.
                                </p>
                                <p>
                                    With a heavy emphasis on "Progressive Enhancement," I strive
                                    for innovative methods to push my bounds while adhering to
                                    proper code standards.
                                </p>
                                <p>
                                    In a quest for always keeping myself updated, I read books and
                                    attend seminars & meetups.
                                </p>
                                <div>
                                    <a
                                        style={{ textDecoration: "none" }}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        href="https://www.linkedin.com/in/anurag-kumar-37aab221a/"
                                    >
                                        <h4 className="my-auto py-4 viewProfile">
                                            View Full Profile
                                        </h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Bio;
