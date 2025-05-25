import React from 'react';
import IconOne from '../../assets/images/icon/1.svg';
import IconTwo from '../../assets/images/icon/2.svg';
import IconThree from '../../assets/images/icon/3.svg';
import IconFour from '../../assets/images/icon/4.svg';

function ServicesHomeOne({ className }) {
    return (
        <section className={`needit-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="needit-section-title text-center">
                            <h3 className="needit-title">
                                How It Works
                            </h3>
                            <p>Get help from your neighbors in 4 simple steps.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="needit-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                                <span>1</span>
                            </div>
                            <h4 className="needit-title">Ask</h4>
                            <p>Post your need instantly.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="needit-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img src={IconTwo} alt="" />
                                <span>2</span>
                            </div>
                            <h4 className="needit-title">Connect</h4>
                            <p>Find nearby helpers.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="needit-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src={IconThree} alt="" />
                                <span>3</span>
                            </div>
                            <h4 className="needit-title">Receive</h4>
                            <p>Get it fast.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="needit-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <img src={IconFour} alt="" />
                                <span>4</span>
                            </div>
                            <h4 className="needit-title">Thank</h4>
                            <p>Rate your helper.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
