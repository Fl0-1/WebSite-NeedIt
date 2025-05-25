import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import BlogHomeOne from '../HomeOne/BlogHomeOne.jsx';
import FaqHomeOne from '../HomeOne/FaqHomeOne.jsx';
import FeaturesHomeOne from '../HomeOne/FeaturesHomeOne.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroHomeOne from '../HomeOne/HeroHomeOne.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import PricingHomeOne from '../HomeOne/PricingHomeOne.jsx';
import ProjectHomeOne from '../HomeOne/ProjectHomeOne.jsx';
import ServicesHomeOne from '../HomeOne/ServicesHomeOne.jsx';
import TeamHomeOne from '../HomeOne/TeamHomeOne.jsx';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne.jsx';
import TrafficHomeOne from '../HomeOne/TrafficHomeOne.jsx';
import Drawer from '../Mobile/Drawer.jsx';

function HomeDark() {
    const [drawer, drawerAction] = useToggle(false);
    const [darkMode, setDarkMode] = useToggle(true);

    useEffect(() => {
        document.body.classList.add('needit-init');
        if (darkMode) {
            document.body.classList.add('needit-dark');
        } else {
            document.body.classList.remove('needit-dark');
        }
        return () => {
            document.body.classList.remove('needit-dark');
        };
    });

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader
                className={darkMode ? 'needit-header-area-dark' : ''}
                dark={darkMode}
                darkEnable
                changeMode={setDarkMode.toggle}
                action={drawerAction.toggle}
            />
            <HeroHomeOne className={darkMode ? 'needit-hero-area-dark' : ''} />
            <ServicesHomeOne className={darkMode ? 'needit-service-area-dark' : ''} />
            <FeaturesHomeOne className={darkMode ? 'needit-features-area-dark' : ''} />
            <TrafficHomeOne className={darkMode ? 'needit-traffic-area-dark' : ''} />
            <TestimonialHomeOne />
            <TeamHomeOne className={darkMode ? 'needit-team-area-dark' : ''} />
            <PricingHomeOne className={darkMode ? 'needit-pricing-area-dark' : ''} />
            <FaqHomeOne className={darkMode ? 'needit-faq-area-dark' : ''} />
            <BlogHomeOne className={darkMode ? 'needit-blog-area-dark' : ''} />
            <ProjectHomeOne />
            <FooterHomeOne className={darkMode ? 'needit-footer-area-dark' : ''} />
            <BackToTop />
        </>
    );
}

export default HomeDark;
