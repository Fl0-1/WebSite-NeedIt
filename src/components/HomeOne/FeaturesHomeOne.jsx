import React from 'react';

function FeaturesHomeOne() {
    return (
        <>
            <section className="needit-highlights-area pt-100 pb-100" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title">Features</h3>
                                <p>Découvrez les fonctionnalités qui font de NeedIt l'application idéale pour répondre à vos besoins quotidiens.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30">
                                <div className="icon">
                                    <i className="fa fa-search" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>1</span>
                                </div>
                                <h4 className="needit-title">Recherche rapide</h4>
                                <p>Trouvez rapidement ce dont vous avez besoin grâce à notre système de recherche intelligent.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-2">
                                <div className="icon">
                                    <i className="fa fa-comments" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>2</span>
                                </div>
                                <h4 className="needit-title">Messagerie</h4>
                                <p>Communiquez facilement avec les autres utilisateurs via notre messagerie intégrée.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-3">
                                <div className="icon">
                                    <i className="fa fa-star" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>3</span>
                                </div>
                                <h4 className="needit-title">Système de notation</h4>
                                <p>Évaluez et consultez les avis pour choisir les meilleurs utilisateurs.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-4">
                                <div className="icon">
                                    <i className="fa fa-bell" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>4</span>
                                </div>
                                <h4 className="needit-title">Notifications</h4>
                                <p>Restez informé en temps réel grâce aux notifications personnalisées.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeaturesHomeOne;
