import React from 'react';

function TestimonialsHomeOne({ className }) {
    return (
        <>
            <section className={`needit-testimonials-area pt-90 pb-100 ${className || ''}`} style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title">What Our Users Say</h3>
                                <p>Real stories from real people who found help through NeedIt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-testimonial-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                                style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                            >
                                <div className="rating" style={{ marginBottom: '15px' }}>
                                    <span style={{ color: '#ffc107', fontSize: '18px' }}>⭐⭐⭐⭐⭐</span>
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
                                    "I needed sugar for a cake at 9pm. Posted on NeedIt and had it within 15 minutes! Amazing community."
                                </p>
                                <div className="author" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', marginRight: '15px' }}>
                                        M
                                    </div>
                                    <div>
                                        <h6 style={{ margin: '0', fontWeight: 'bold' }}>Marie L.</h6>
                                        <span style={{ color: '#666', fontSize: '14px' }}>Paris 15ème</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-testimonial-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                                style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                            >
                                <div className="rating" style={{ marginBottom: '15px' }}>
                                    <span style={{ color: '#ffc107', fontSize: '18px' }}>⭐⭐⭐⭐⭐</span>
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
                                    "My car broke down and I needed a ride to work. A neighbor helped me out immediately. Lifesaver!"
                                </p>
                                <div className="author" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#28a745', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', marginRight: '15px' }}>
                                        J
                                    </div>
                                    <div>
                                        <h6 style={{ margin: '0', fontWeight: 'bold' }}>Julien M.</h6>
                                        <span style={{ color: '#666', fontSize: '14px' }}>Lyon 3ème</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-testimonial-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                                style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                            >
                                <div className="rating" style={{ marginBottom: '15px' }}>
                                    <span style={{ color: '#ffc107', fontSize: '18px' }}>⭐⭐⭐⭐⭐</span>
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
                                    "I love helping my neighbors! NeedIt makes it so easy to lend a hand when someone needs it."
                                </p>
                                <div className="author" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#dc3545', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', marginRight: '15px' }}>
                                        S
                                    </div>
                                    <div>
                                        <h6 style={{ margin: '0', fontWeight: 'bold' }}>Sophie D.</h6>
                                        <span style={{ color: '#666', fontSize: '14px' }}>Marseille 8ème</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TestimonialsHomeOne;
