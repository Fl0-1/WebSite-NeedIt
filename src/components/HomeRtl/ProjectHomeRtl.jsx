import React from 'react';
import projectThumb from '../../assets/images/project-thumb.png';

function ProjectHomeRtl({ className }) {
    return (
        <>
            <section className={`needit-project-area pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="needit-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="needit-project-content text-right">
                                            <h3 className="title">ابدأ مشروعك مع needit.</h3>
                                            <p>سنرسل لك بريدًا إلكترونيًا حول هذا المنتج فقط.</p>
                                            <form action="#">
                                                <div className="input-box mt-30">
                                                    <input type="text" placeholder="Your email" />
                                                    <button type="button">الإشتراك</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="needit-project-thumb">
                                    <img src={projectThumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeRtl;
