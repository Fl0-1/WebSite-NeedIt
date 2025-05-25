import React, { useState } from 'react';

function FaqHomeOne({ className }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How does NeedIt work?",
            answer: "Simply post what you need in the app, and nearby community members will see your request and offer to help. You can then connect directly with helpers to arrange the assistance."
        },
        {
            question: "Is NeedIt safe to use?",
            answer: "Yes! All users are verified through phone numbers, and we have a rating system so you can see reviews from other community members. You can also view helper profiles before accepting assistance."
        },
        {
            question: "How much does it cost?",
            answer: "NeedIt is completely free to use! Our community is built on the spirit of mutual aid and helping neighbors. Some users may choose to offer small tips for help, but it's entirely optional."
        },
        {
            question: "What kind of help can I request?",
            answer: "Almost anything! From borrowing ingredients, getting rides, help with moving, pet sitting, technical support, or any other everyday needs. Just make sure requests are reasonable and legal."
        },
        {
            question: "How quickly can I get help?",
            answer: "Most requests get responses within 15 minutes! The speed depends on your location and the type of help needed, but our active community means help is usually just around the corner."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <>
            <section id="faq" className={`needit-faq-area pt-90 pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title">Frequently Asked Questions</h3>
                                <p>Everything you need to know about using NeedIt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="needit-faq-wrapper">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="needit-faq-item mt-20 wow animated fadeInUp"
                                        data-wow-duration="2000ms"
                                        data-wow-delay={`${200 + index * 100}ms`}
                                        style={{
                                            backgroundColor: 'white',
                                            border: '1px solid #e9ecef',
                                            borderRadius: '8px',
                                            marginBottom: '15px',
                                            overflow: 'hidden',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                        }}
                                    >
                                        <div
                                            className="faq-question"
                                            onClick={() => toggleFaq(index)}
                                            style={{
                                                padding: '20px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                backgroundColor: activeIndex === index ? '#f8f9fa' : 'white',
                                                borderBottom: activeIndex === index ? '1px solid #e9ecef' : 'none'
                                            }}
                                        >
                                            <h5 style={{ margin: '0', fontWeight: '600', color: '#333' }}>
                                                {faq.question}
                                            </h5>
                                            <span
                                                style={{
                                                    fontSize: '20px',
                                                    color: '#007bff',
                                                    transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            >
                                                +
                                            </span>
                                        </div>
                                        {activeIndex === index && (
                                            <div
                                                className="faq-answer"
                                                style={{
                                                    padding: '20px',
                                                    backgroundColor: '#f8f9fa',
                                                    color: '#666',
                                                    lineHeight: '1.6'
                                                }}
                                            >
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeOne;
