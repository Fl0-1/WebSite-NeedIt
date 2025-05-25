import React, { useState } from 'react';

function PricingHomeOne({ className }) {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <>
            <section id="pricing" className={`needit-pricing-area pt-90 pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title">Simple, Transparent Pricing</h3>
                                <p>Choose the plan that works best for you. Start free, upgrade when you need more.</p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Toggle */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-6">
                            <div className="pricing-toggle text-center">
                                <div
                                    className="toggle-wrapper"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '50px',
                                        padding: '8px',
                                        position: 'relative'
                                    }}
                                >
                                    <button
                                        className={`toggle-btn ${!isAnnual ? 'active' : ''}`}
                                        onClick={() => setIsAnnual(false)}
                                        style={{
                                            padding: '12px 24px',
                                            border: 'none',
                                            borderRadius: '50px',
                                            backgroundColor: !isAnnual ? '#007bff' : 'transparent',
                                            color: !isAnnual ? 'white' : '#666',
                                            fontWeight: '500',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            zIndex: 2
                                        }}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        className={`toggle-btn ${isAnnual ? 'active' : ''}`}
                                        onClick={() => setIsAnnual(true)}
                                        style={{
                                            padding: '12px 24px',
                                            border: 'none',
                                            borderRadius: '50px',
                                            backgroundColor: isAnnual ? '#007bff' : 'transparent',
                                            color: isAnnual ? 'white' : '#666',
                                            fontWeight: '500',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            zIndex: 2,
                                            position: 'relative',
                                            marginRight: '10px'
                                        }}
                                    >
                                        Annual
                                    </button>
                                    {/* Badge séparé pour éviter les conflits */}
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: '-8px',
                                            right: '8px',
                                            backgroundColor: '#28a745',
                                            color: 'white',
                                            fontSize: '10px',
                                            padding: '2px 6px',
                                            borderRadius: '10px',
                                            fontWeight: 'bold',
                                            zIndex: 3
                                        }}
                                    >
                                        -17%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="row justify-content-center">
                        {/* Free Plan */}
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-pricing-card mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '20px',
                                    padding: '40px 30px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid transparent',
                                    position: 'relative'
                                }}
                            >
                                <div className="plan-header" style={{ marginBottom: '30px' }}>
                                    <h4 style={{ color: '#333', marginBottom: '10px', fontWeight: '600' }}>Free</h4>
                                    <p style={{ color: '#666', fontSize: '14px' }}>Perfect to get started</p>
                                </div>

                                <div className="plan-price" style={{ marginBottom: '30px' }}>
                                    <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#333' }}>€0</span>
                                    <span style={{ color: '#666', fontSize: '16px' }}>/month</span>
                                </div>

                                <div className="plan-features" style={{ marginBottom: '30px', textAlign: 'left' }}>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ padding: '8px 0', color: '#666', fontSize: '14px' }}>
                                            <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                                            Basic neighborhood access
                                        </li>
                                        <li style={{ padding: '8px 0', color: '#666', fontSize: '14px' }}>
                                            <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                                            5 requests per month
                                        </li>
                                        <li style={{ padding: '8px 0', color: '#666', fontSize: '14px' }}>
                                            <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                                            Standard support
                                        </li>
                                        <li style={{ padding: '8px 0', color: '#ccc', fontSize: '14px' }}>
                                            <i className="fas fa-times" style={{ color: '#dc3545', marginRight: '10px' }}></i>
                                            Limited filtering options
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        border: '2px solid #007bff',
                                        borderRadius: '10px',
                                        backgroundColor: 'transparent',
                                        color: '#007bff',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = '#007bff';
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = '#007bff';
                                    }}
                                >
                                    Get Started Free
                                </button>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="needit-pricing-card premium mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '20px',
                                    padding: '40px 30px',
                                    boxShadow: '0 20px 40px rgba(0,123,255,0.15)',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid #007bff',
                                    position: 'relative',
                                    transform: 'scale(1.05)'
                                }}
                            >
                                {/* Popular Badge */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        padding: '8px 24px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    MOST POPULAR
                                </div>

                                <div className="plan-header" style={{ marginBottom: '30px' }}>
                                    <h4 style={{ color: '#333', marginBottom: '10px', fontWeight: '600' }}>Premium</h4>
                                    <p style={{ color: '#666', fontSize: '14px' }}>For power users</p>
                                </div>

                                <div className="plan-price" style={{ marginBottom: '30px' }}>
                                    <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#007bff' }}>
                                        €{isAnnual ? '4.17' : '4.99'}
                                    </span>
                                    <span style={{ color: '#666', fontSize: '16px' }}>/month</span>
                                    {isAnnual && (
                                        <div style={{ fontSize: '12px', color: '#28a745', marginTop: '5px' }}>
                                            Billed annually (€49.99/year)
                                        </div>
                                    )}
                                </div>

                                <div className="plan-features" style={{ marginBottom: '30px', textAlign: 'left' }}>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ padding: '8px 0', color: '#666', fontSize: '14px' }}>
                                            <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                                            Everything in Free
                                        </li>
                                        <li style={{ padding: '8px 0', color: '#666', fontSize: '14px' }}>
                                            <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                                            Unlimited requests
                                        </li>
                                        <li style={{ padding: '8px 0', color: '#666', fontSize: '14px' }}>
                                            <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                                            Advanced filtering options
                                        </li>
                                        <li style={{ padding: '8px 0', color: '#666', fontSize: '14px' }}>
                                            <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                                            No sampling restrictions
                                        </li>
                                        <li style={{ padding: '8px 0', color: '#666', fontSize: '14px' }}>
                                            <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                                            Increased visibility
                                        </li>
                                        <li style={{ padding: '8px 0', color: '#666', fontSize: '14px' }}>
                                            <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                                            Priority support
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        border: 'none',
                                        borderRadius: '10px',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = '#0056b3';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = '#007bff';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Start Premium
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default PricingHomeOne;
