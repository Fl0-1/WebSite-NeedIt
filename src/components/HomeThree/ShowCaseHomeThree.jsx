import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import "yet-another-react-lightbox/styles.css";
import shape12 from '../../assets/images/shape/shape-12.png';
import shape13 from '../../assets/images/shape/shape-13.png';
import shape14 from '../../assets/images/shape/shape-14.png';
import shape15 from '../../assets/images/shape/shape-15.png';
import showCaseOne from '../../assets/images/showcase-1.png';
import showCaseTwo from '../../assets/images/showcase-2.png';
import showCaseThree from '../../assets/images/showcase-3.png';
import showCaseFour from '../../assets/images/showcase-4.png';
import showCaseFive from '../../assets/images/showcase-5.png';
import Lightbox from "yet-another-react-lightbox";

function ShowCaseHomeThree() {
    const [open, setOpen] = useState(false);
    const [photoIndex, setIndex] = useState(0);
    const popupHandler = (value) => {
        setIndex(value);
        setOpen(!open);
    };
    const sliderRef = useRef();
    // const sliderNext = () => {
    //     sliderRef.current.slickNext();
    // };
    // const sliderPrev = () => {
    //     sliderRef.current.slickPrev();
    // };
    const settings = {
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="needit-showcase-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title">Creative app showcase</h3>
                                <p>The app provides design and digital marketing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row needit-showcase-slider">
                        <div className="col-lg-12">
                            <Slider ref={sliderRef} {...settings}>
                                <div onClick={() => popupHandler(0)}>
                                    <div className="needit-showcase-item mt-30">
                                        <a className="needit-image-popup">
                                            <img src={showCaseOne} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div onClick={() => popupHandler(1)}>
                                    <div className="needit-showcase-item mt-30">
                                        <a className="needit-image-popup">
                                            <img src={showCaseTwo} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div onClick={() => popupHandler(2)}>
                                    <div className="needit-showcase-item mt-30">
                                        <a className="needit-image-popup">
                                            <img src={showCaseThree} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div onClick={() => popupHandler(3)}>
                                    <div className="needit-showcase-item mt-30">
                                        <a className="needit-image-popup">
                                            <img src={showCaseFour} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div onClick={() => popupHandler(4)}>
                                    <div className="needit-showcase-item mt-30">
                                        <a className="needit-image-popup">
                                            <img src={showCaseFive} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="showcase-shape-1">
                    <img src={shape14} alt="" />
                </div>
                <div className="showcase-shape-2">
                    <img src={shape13} alt="" />
                </div>
                <div className="showcase-shape-3">
                    <img src={shape12} alt="" />
                </div>
                <div className="showcase-shape-4">
                    <img src={shape15} alt="" />
                </div>
            </section>
            <Lightbox
                index={photoIndex}
                open={open}
                close={() => setOpen(false)}
                slides={[
                    {
                        src: showCaseOne
                    },
                    {
                        src: showCaseTwo
                    },
                    {
                        src: showCaseThree
                    },
                    {
                        src: showCaseFour
                    },
                    {
                        src: showCaseFive
                    },
                ]}
            />
        </>
    );
}

export default ShowCaseHomeThree;
