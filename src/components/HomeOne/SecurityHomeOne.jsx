import React from 'react';

function SecurityHomeOne() {
    return (
        <>
            <section className="needit-highlights-area pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title">Security</h3>
                                <p>Votre sécurité est notre priorité. Découvrez comment nous protégeons vos données et votre vie privée.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30">
                                <div className="icon">
                                    <i className="fa fa-lock" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>1</span>
                                </div>
                                <h4 className="needit-title">Chiffrement</h4>
                                <p>Toutes vos données sont chiffrées de bout en bout pour garantir leur confidentialité.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-2">
                                <div className="icon">
                                    <i className="fa fa-user-secret" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>2</span>
                                </div>
                                <h4 className="needit-title">Anonymat</h4>
                                <p>Contrôlez les informations personnelles que vous souhaitez partager avec les autres utilisateurs.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-3">
                                <div className="icon">
                                    <i className="fa fa-id-card" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>3</span>
                                </div>
                                <h4 className="needit-title">Vérification</h4>
                                <p>Système de vérification des utilisateurs pour garantir la fiabilité de la communauté.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-4">
                                <div className="icon">
                                    <i className="fa fa-shield" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>4</span>
                                </div>
                                <h4 className="needit-title">Protection</h4>
                                <p>Surveillance continue pour détecter et prévenir toute activité suspecte sur la plateforme.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SecurityHomeOne;
