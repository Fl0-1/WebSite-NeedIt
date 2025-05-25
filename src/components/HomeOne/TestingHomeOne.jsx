import React from 'react';

function TestingHomeOne() {
    return (
        <>
            <section className="needit-highlights-area pt-100 pb-100" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="needit-section-title text-center">
                                <h3 className="needit-title">Testing</h3>
                                <p>Notre application est rigoureusement testée pour garantir une expérience utilisateur optimale et sans faille.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30">
                                <div className="icon">
                                    <i className="fa fa-check-circle" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>1</span>
                                </div>
                                <h4 className="needit-title">Tests unitaires</h4>
                                <p>Chaque composant est testé individuellement pour garantir son bon fonctionnement.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-2">
                                <div className="icon">
                                    <i className="fa fa-users" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>2</span>
                                </div>
                                <h4 className="needit-title">Tests utilisateurs</h4>
                                <p>Des tests réels avec des utilisateurs pour améliorer l'expérience et l'interface.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-3">
                                <div className="icon">
                                    <i className="fa fa-mobile" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>3</span>
                                </div>
                                <h4 className="needit-title">Compatibilité</h4>
                                <p>Tests sur différents appareils et navigateurs pour assurer une compatibilité maximale.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="needit-single-highlight text-center mt-30 item-4">
                                <div className="icon">
                                    <i className="fa fa-tachometer" style={{ color: '#fff', fontSize: '24px' }}></i>
                                    <span>4</span>
                                </div>
                                <h4 className="needit-title">Performance</h4>
                                <p>Tests de performance pour garantir rapidité et fluidité même en cas de forte affluence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TestingHomeOne;
