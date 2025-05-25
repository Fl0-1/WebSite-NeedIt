import React from 'react';

function AppHighlightsHomeOne() {
    return (
        <>
            <section className="needit-highlights-area pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title">Technologies</h3>
                                <p>Notre application utilise les technologies les plus récentes pour offrir une expérience utilisateur optimale et sécurisée.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30">
                                <div className="icon">
                                    <i className="fa fa-code" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>1</span>
                                </div>
                                <h4 className="needit-title">React.js</h4>
                                <p>Interface utilisateur réactive et moderne avec React pour une expérience fluide.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-2">
                                <div className="icon">
                                    <i className="fa fa-database" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>2</span>
                                </div>
                                <h4 className="needit-title">Node.js</h4>
                                <p>Backend robuste et évolutif pour gérer les demandes en temps réel.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-3">
                                <div className="icon">
                                    <i className="fa fa-map-marker" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>3</span>
                                </div>
                                <h4 className="needit-title">Géolocalisation</h4>
                                <p>Localisation précise pour connecter les utilisateurs à proximité.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-4">
                                <div className="icon">
                                    <i className="fa fa-shield" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>4</span>
                                </div>
                                <h4 className="needit-title">Sécurité</h4>
                                <p>Protocoles de sécurité avancés pour protéger les données des utilisateurs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AppHighlightsHomeOne;
