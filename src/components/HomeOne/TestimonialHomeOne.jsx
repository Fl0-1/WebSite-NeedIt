import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import user from '../../assets/images/testimonial-user.png';

function TestimonialHomeOne({ className }) {
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section
            className={`needit-testimonial-area pt-100 pb-160 ${className || ''}`}
            id="testimonial"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="needit-testimonial-slider" style={{ position: 'relative' }}>
                            <span
                                className="prev slick-arrow"
                                style={{ display: 'block' }}
                                onClick={sliderNext}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fal fa-arrow-left" />
                            </span>
                            <Slider ref={sliderRef} dots arrows={false}>
                                <div className="needit-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">Jason Response</h5>
                                        <span>April 14, 2022</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Why I say old chap that is spiffing lurgy Oxford
                                            cracking goal bleeder, bog-standard Harry brilliant mush
                                            a blinding shot starkers.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="needit-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">Jason Response</h5>
                                        <span>April 14, 2022</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Why I say old chap that is spiffing lurgy Oxford
                                            cracking goal bleeder, bog-standard Harry brilliant mush
                                            a blinding shot starkers.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="needit-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">Jason Response</h5>
                                        <span>April 14, 2022</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Why I say old chap that is spiffing lurgy Oxford
                                            cracking goal bleeder, bog-standard Harry brilliant mush
                                            a blinding shot starkers.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Slider>
                            <span
                                onClick={sliderPrev}
                                role="button"
                                tabIndex="-1"
                                className="next slick-arrow"
                                style={{ display: 'block' }}
                            >
                                <i className="fal fa-arrow-right" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialHomeOne;
