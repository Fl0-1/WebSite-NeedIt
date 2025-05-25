import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ lang = false }) {
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            {lang ? (
                <ul>
                    <li>
                        <Link to="/">الصفحة الرئيسية</Link>
                    </li>
                    <li>
                        <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')}>
                            المميزات
                        </a>
                    </li>
                    <li>
                        <a href="#service" onClick={(e) => handleSmoothScroll(e, 'service')}>
                            كيف يعمل
                        </a>
                    </li>
                    <li>
                        <a href="#team" onClick={(e) => handleSmoothScroll(e, 'team')}>
                            فريقنا
                        </a>
                    </li>
                    <li>
                        <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>
                            الأسعار
                        </a>
                    </li>
                    <li>
                        <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>
                            الأسئلة الشائعة
                        </a>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')}>
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#service" onClick={(e) => handleSmoothScroll(e, 'service')}>
                            How It Works
                        </a>
                    </li>
                    <li>
                        <a href="#team" onClick={(e) => handleSmoothScroll(e, 'team')}>
                            Our Team
                        </a>
                    </li>
                    <li>
                        <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>
                            FAQ
                        </a>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Navigation;
