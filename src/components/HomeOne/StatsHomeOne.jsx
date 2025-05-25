import React from 'react';

function StatsHomeOne({ className }) {
    return (
        <>
            <section className={`needit-stats-area pt-90 pb-90 ${className || ''}`} style={{ backgroundColor: '#007bff', color: 'white' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title" style={{ color: 'white' }}>NeedIt in Numbers</h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Join thousands of people already helping each other every day.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="needit-single-stat text-center mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="stat-number" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
                                    2,500+
                                </div>
                                <h5 style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>Requests Solved</h5>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                                    Successful help requests completed through our platform
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="needit-single-stat text-center mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="stat-number" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
                                    1,200+
                                </div>
                                <h5 style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>Active Users</h5>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                                    Community members ready to help in your neighborhood
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="needit-single-stat text-center mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="stat-number" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
                                    12 min
                                </div>
                                <h5 style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>Average Response</h5>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                                    Average time to get your first response from helpers
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="needit-single-stat text-center mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="800ms"
                            >
                                <div className="stat-number" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
                                    4.9/5
                                </div>
                                <h5 style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>User Rating</h5>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                                    Average satisfaction rating from our community
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default StatsHomeOne;
