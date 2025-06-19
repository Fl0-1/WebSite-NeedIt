import React from 'react';

function ValuesHomeOne({ className }) {
    return (
        <>
            <section className={`needit-values-area pt-90 pb-60 ${className || ''}`} id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title">Why Join NeedIt?</h3>
                                <p>A community built on kindness. Help when you can. Ask when you need.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-single-value text-center mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <span className="value-emoji">🤝</span>
                                </div>
                                <h4 className="needit-title">Local Connections</h4>
                                <p>Connect with neighbors in your area who are ready to help.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-single-value text-center mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <span className="value-emoji">⚡</span>
                                </div>
                                <h4 className="needit-title">Instant Help</h4>
                                <p>Post a request and get a reply in minutes. No waiting, no stress.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-single-value text-center mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <span className="value-emoji">🏠</span>
                                </div>
                                <h4 className="needit-title">Stronger Together</h4>
                                <p>NeedIt brings back trust, kindness, and the joy of helping right where you live.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ValuesHomeOne;
