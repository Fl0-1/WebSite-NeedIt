import React from 'react';

function CtaHomeOne({ className }) {
    return (
        <>
            <section className={`needit-cta-area pt-90 pb-90 ${className || ''}`} style={{ backgroundColor: '#28a745', color: 'white' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="needit-cta-content">
                                <h2 className="needit-title" style={{ color: 'white', marginBottom: '15px' }}>
                                    Ready to Join Your Local Community?
                                </h2>
                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: '0' }}>
                                    Download NeedIt now and start connecting with neighbors who care.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="needit-cta-buttons text-lg-end text-center mt-30 mt-lg-0">
                                <div className="download-buttons">
                                    <a
                                        href="#"
                                        className="btn-download"
                                        style={{
                                            display: 'inline-block',
                                            backgroundColor: 'white',
                                            color: '#28a745',
                                            padding: '12px 25px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            margin: '5px',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                        }}
                                    >
                                        <i className="fab fa-apple" style={{ marginRight: '8px' }}></i>
                                        Download for iOS
                                    </a>
                                    <a
                                        href="#"
                                        className="btn-download"
                                        style={{
                                            display: 'inline-block',
                                            backgroundColor: 'white',
                                            color: '#28a745',
                                            padding: '12px 25px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            margin: '5px',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                        }}
                                    >
                                        <i className="fab fa-google-play" style={{ marginRight: '8px' }}></i>
                                        Download for Android
                                    </a>
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginTop: '15px' }}>
                                    Free to download • Available worldwide
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CtaHomeOne;
