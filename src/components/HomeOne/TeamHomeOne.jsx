import React from 'react';
import florentImg from '../../assets/images/Florent.png';
import jeanJusteImg from '../../assets/images/JeanJuste.png';
import dounyaImg from '../../assets/images/Dounya.png';
import leoImg from '../../assets/images/Leo.png';
import linaImg from '../../assets/images/Lina.png';

function TeamHomeOne({ className }) {
    return (
        <>
            <section id="team" className={`needit-team-area pt-90 pb-100 ${className || ''}`} style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title">Meet Our Expert Team</h3>
                                <p>A dedicated team of experienced professionals committed to building innovative solutions that connect communities and solve real-world problems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-team-item-pro mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div className="team-photo" style={{ marginBottom: '20px' }}>
                                    <img
                                        src={florentImg}
                                        alt="Florent - CEO & Lead Developer"
                                        style={{
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '4px solid #007bff',
                                            margin: '0 auto'
                                        }}
                                    />
                                </div>
                                <div className="team-info">
                                    <h4 style={{ color: '#333', marginBottom: '5px', fontWeight: '600' }}>Florent Leclercq</h4>
                                    <p style={{ color: '#007bff', fontWeight: '500', marginBottom: '15px' }}>CEO & Lead Developer</p>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                                        Visionary leader with expertise in full-stack development and product strategy. Passionate about creating technology that brings communities together.
                                    </p>
                                    <div className="social-links" style={{ marginTop: '20px' }}>
                                        <a href="#" style={{ color: '#007bff', margin: '0 8px', fontSize: '18px' }}>
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#" style={{ color: '#007bff', margin: '0 8px', fontSize: '18px' }}>
                                            <i className="fab fa-github" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-team-item-pro mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div className="team-photo" style={{ marginBottom: '20px' }}>
                                    <img
                                        src={jeanJusteImg}
                                        alt="Jean-Juste - CTO & Backend Architect"
                                        style={{
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '4px solid #28a745',
                                            margin: '0 auto'
                                        }}
                                    />
                                </div>
                                <div className="team-info">
                                    <h4 style={{ color: '#333', marginBottom: '5px', fontWeight: '600' }}>Jean-Juste Mukendi</h4>
                                    <p style={{ color: '#28a745', fontWeight: '500', marginBottom: '15px' }}>CTO & Backend Architect</p>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                                        Technical expert specializing in scalable backend systems and cloud infrastructure. Ensures robust and secure platform architecture.
                                    </p>
                                    <div className="social-links" style={{ marginTop: '20px' }}>
                                        <a href="#" style={{ color: '#28a745', margin: '0 8px', fontSize: '18px' }}>
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#" style={{ color: '#28a745', margin: '0 8px', fontSize: '18px' }}>
                                            <i className="fab fa-github" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-team-item-pro mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div className="team-photo" style={{ marginBottom: '20px' }}>
                                    <img
                                        src={dounyaImg}
                                        alt="Dounya - Head of Design & UX"
                                        style={{
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '4px solid #dc3545',
                                            margin: '0 auto'
                                        }}
                                    />
                                </div>
                                <div className="team-info">
                                    <h4 style={{ color: '#333', marginBottom: '5px', fontWeight: '600' }}>Dounya Benali</h4>
                                    <p style={{ color: '#dc3545', fontWeight: '500', marginBottom: '15px' }}>Head of Design & UX</p>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                                        Creative designer focused on user experience and interface design. Creates intuitive and beautiful digital experiences that users love.
                                    </p>
                                    <div className="social-links" style={{ marginTop: '20px' }}>
                                        <a href="#" style={{ color: '#dc3545', margin: '0 8px', fontSize: '18px' }}>
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#" style={{ color: '#dc3545', margin: '0 8px', fontSize: '18px' }}>
                                            <i className="fab fa-dribbble" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-team-item-pro mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="800ms"
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div className="team-photo" style={{ marginBottom: '20px' }}>
                                    <img
                                        src={leoImg}
                                        alt="Léo - Mobile Developer"
                                        style={{
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '4px solid #ffc107',
                                            margin: '0 auto'
                                        }}
                                    />
                                </div>
                                <div className="team-info">
                                    <h4 style={{ color: '#333', marginBottom: '5px', fontWeight: '600' }}>Léo Martinez</h4>
                                    <p style={{ color: '#ffc107', fontWeight: '500', marginBottom: '15px' }}>Mobile Developer</p>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                                        Mobile development specialist creating seamless iOS and Android experiences. Expert in React Native and native mobile technologies.
                                    </p>
                                    <div className="social-links" style={{ marginTop: '20px' }}>
                                        <a href="#" style={{ color: '#ffc107', margin: '0 8px', fontSize: '18px' }}>
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#" style={{ color: '#ffc107', margin: '0 8px', fontSize: '18px' }}>
                                            <i className="fab fa-github" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-team-item-pro mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="1000ms"
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div className="team-photo" style={{ marginBottom: '20px' }}>
                                    <img
                                        src={linaImg}
                                        alt="Lina - Product Manager"
                                        style={{
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '4px solid #6f42c1',
                                            margin: '0 auto'
                                        }}
                                    />
                                </div>
                                <div className="team-info">
                                    <h4 style={{ color: '#333', marginBottom: '5px', fontWeight: '600' }}>Lina Chen</h4>
                                    <p style={{ color: '#6f42c1', fontWeight: '500', marginBottom: '15px' }}>Product Manager</p>
                                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                                        Strategic product leader driving user-centered innovation. Bridges business objectives with technical execution to deliver exceptional user value.
                                    </p>
                                    <div className="social-links" style={{ marginTop: '20px' }}>
                                        <a href="#" style={{ color: '#6f42c1', margin: '0 8px', fontSize: '18px' }}>
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#" style={{ color: '#6f42c1', margin: '0 8px', fontSize: '18px' }}>
                                            <i className="fab fa-twitter" />
                                        </a>
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

export default TeamHomeOne;
