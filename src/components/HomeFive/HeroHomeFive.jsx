import React from 'react';
import HeroDot from '../../assets/images/hero-dot.png';
import heroThumb from '../../assets/images/hero-thumb-5.png';
import shape from '../../assets/images/shape/shape-10.png';

function HeroHomeFive() {
    return (
        <>
            <section className="needit-hero-area needit-hero-4-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="needit-hero-content needit-hero-content-4">
                                <span>30 Days Free Trial</span>
                                <h1 className="needit-title">Get it done with needit.io</h1>
                                <p>
                                    Tosser lemon squeezy chancer hanky panky arse plastered show off
                                    show off pick your nose and blow knackered bugger porkies.
                                </p>
                                <a className="main-btn" href="#">
                                    Let’s Talk
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="needit-hero-thumb needit-hero-thumb-4">
                                <img src={heroThumb} alt="" />
                                <div className="hero-dot">
                                    <img src={HeroDot} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src={shape} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeFive;
