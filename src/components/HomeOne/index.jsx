import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import CtaHomeOne from './CtaHomeOne.jsx';
import FaqHomeOne from './FaqHomeOne.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import HeroHomeOne from './HeroHomeOne.jsx';
import HomeOneHeader from './HomeOneHeader.jsx';
import PricingHomeOne from './PricingHomeOne.jsx';
import ServicesHomeOne from './ServicesHomeOne.jsx';
import StatsHomeOne from './StatsHomeOne.jsx';
import TeamHomeOne from './TeamHomeOne.jsx';
import TestimonialsHomeOne from './TestimonialsHomeOne.jsx';
import ValuesHomeOne from './ValuesHomeOne.jsx';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeOne />
            <ValuesHomeOne />
            <TestimonialsHomeOne />
            <StatsHomeOne />
            <TeamHomeOne />
            <PricingHomeOne />
            <FaqHomeOne />
            <CtaHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
