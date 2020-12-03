import * as React from "react";
import '../css/Services.css';


class Services extends React.Component {
    render() {
        return <div>
            <section className="min-vh-100" id="services">

                <div className="d-flex container min-vh-100 justify-content-center">
                    <h2 className="dark">SZOLGÁLTATÁSOK</h2>

                    <div className="row" id="men-haricut">
                        <div className="d-flex flex-column col-lg-7 col-md-6 col-sm-12 justify-content-center order-0
                         order-md-0">
                            <img id="workstation" src="../images/men-haircut_V2.png" alt=""
                                 className="align-content-center"/>
                        </div>
                        <div id="services-text"
                             className="d-flex flex-column col-lg-5 col-md-6 col-sm-12 justify-content-center order-1
                              order-md-1">
                            <h3 className="dark">Férfi hajvágás</h3>
                            <span className="dark">
                                • Rövid 3000ft + mosás<br/>
                                • Hosszú 4000ft + mosás<br/>
                                • Gépi hajvágás: 2500ft + mosás<br/>
                                • Festés: 2000-5000ft + anyag<br/>
                                • Szakálligazítás: 500-1000ft<br/>
                                • Szakállvágás: 2000-3000ft<br/>
                                • Szakállfestés: 1500-3500ft + anyag<br/>
                                • Mosás: 500ft<br/>
                            </span>
                        </div>
                    </div>

                    <div className="row" id="women-haircut">
                        <div id="services-text"
                             className="d-flex flex-column col-lg-7 col-md-6 col-sm-12 justify-content-center order-1
                              order-md-0">
                            <h3 className="dark">Nöi hajvágás</h3>
                            <span className="dark">
                                • Rövid: 3500ft + (mosás: 500ft)<br/>
                                • Félhosszú: 4500ft + mosás<br/>
                                • Hosszú: 5500-8000ft + mosás<br/>
                                • Festés/Melír: 2000-8000ft + anyag<br/>
                                • Balayage és Ombre: 8000-15000ft +anyag<br/>
                                • Mosás: 850ft<br/>
                            </span>
                        </div>
                        <div className="d-flex flex-column col-lg-5 col-md-6 col-sm-12 justify-content-center order-0
                        order-md-1">
                            <img id="workstation" src="../images/women-haircut.png" alt=""
                                 className="align-content-center"/>
                        </div>
                    </div>

                    <div className="row" id="other-services">
                        <div className="d-flex flex-column col-lg-7 col-md-6 col-sm-12 justify-content-center order-0
                        order-md-0">
                            <img id="workstation" src="../images/hairdrier-art.png" alt=""
                                 className="align-content-center"/>
                        </div>
                        <div id="services-text"
                             className="d-flex flex-column col-lg-5 col-md-6 col-sm-12 justify-content-center order-1
                             order-md-1">
                            <h3 className="dark">Szárítás</h3>
                            <span className="dark">
                                    • Rövid: 1500ft + (mosás: 500ft)<br/>
                                    • Félhosszú: 3500ft + mosás<br/>
                                    • Hosszú: 4000ft + mosás<br/>
                                    • Göndörítés: 5500ft<br/>
                                </span>
                        </div>
                    </div>

                    <div className="row" id="other-services">
                        <div id="services-text"
                             className="d-flex flex-column col-lg-5 col-md-6 col-sm-12 justify-content-center order-1
                             order-md-0">
                            <h3 className="dark">Hajápolás</h3>
                            <span className="dark">
                                    • Cellula Madre kezelés: 8500-15500ft.<br/>
                                    • Keratinos kezelés: 13000-19000ft
                                    (Elhasznált anyag függő)
                                </span>
                        </div>
                        <div className="d-flex flex-column col-lg-7 col-md-6 col-sm-12 justify-content-center order-0
                        order-md-1">
                            <img id="workstation" src="../images/creatin-work.png" alt=""
                                 className="align-content-center"/>
                        </div>
                    </div>

                    <div className="row" id="other-services">
                        <div className="d-flex flex-column col-lg-7 col-md-6 col-sm-12 justify-content-center order-0
                        order-md-0">
                            <img id="workstation" src="../images/hair-support.png" alt=""
                                 className="align-content-center"/>
                        </div>
                        <div id="services-text"
                             className="d-flex flex-column col-lg-5 col-md-6 col-sm-12 justify-content-center order-1
                             order-md-1">
                            <h3 className="dark">Póthaj</h3>
                            <span className="dark">
                                    • Rövid: 1500ft + (mosás: 500ft)<br/>
                                    • Felrakás: 180ft/tincs<br/>
                                    • Leszedés: 9000-14000ft. + oldószer<br/>
                                    • Tincsezés: 100ft/tincs + keratin<br/>
                                    • Póthaj festés: 3000-7000ft + anyag<br/>
                                    (Mennyiség, és hajhossz függő, póthajat természetesen nem tartalmazza)
                                </span>
                        </div>
                    </div>
                </div>
            </section>
            <div id="service-footer">
                <div className="justify-content-center" id="divider-wrapper">
                    <img className="divider" src="../images/paper-trim-2.png " alt=""/>
                </div>
            </div>
        </div>
    }
}

export default Services;