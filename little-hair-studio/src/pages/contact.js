import * as React from "react";
import '../css/contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMobileAlt, faMapMarker, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

class Contact extends React.Component {
    render() {

        return <div className="vw-100">

            <section className="min-vh-100" id="contact">
                <div className="d-flex container min-vh-100 justify-content-center align-items-center">
                    <div className="row" id="contact-text">
                        <div
                             className="d-flex flex-column col-md-6 col-sm-12 justify-content-center">
                            <h2 className="light">KAPCSOLAT</h2>
                            <span className="light" id="contact-text">
                                <div className="row">
                                    <div className="col-2 text-center" id="icon-col">

                                            <FontAwesomeIcon icon={faMobileAlt}/><br/>
                                            <FontAwesomeIcon icon={faMapMarker}/><br/>
                                            <FontAwesomeIcon icon={faEnvelope}/><br/>

                                    </div>
                                    <div className="col-10 pl-0">
                                        <span>+36 (30) 000 0000</span><br/>
                                        <span>66 Fleet St, London</span><br/>
                                        <span>directors-cut-4678@pages.plusgoogle.com</span><br/>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop: "30px", marginLeft: "3px"}}>
                                    <div className="col" id="open-time">
                                        <span style={{
                                            fontWeight: "bold",
                                            fontSize: "17px",
                                            textDecoration: "underline"
                                        }}>Nyitvatartás:</span><br/>
                                        Hetfő: 12:00-18:00<br/>
                                        Kedd: 12:00-18:00<br/>
                                        Szerda: 09:00-18:00<br/>
                                        Csütörtök: 09:00-20:00<br/>
                                        Péntek: 09:00-20:00<br/>
                                        Szombat: 09:00-13:00<br/>
                                        Vasárnap ZÁRVA<br/>
                                    </div>
                                </div>



                            </span>
                        </div>
                        <div className="d-flex flex-column col-md-6 col-sm-12 justify-content-center">
                            <div id="color-filter"></div>


                            <div id="googlemaps-div-1">
                                <iframe width="100%" height="350px"
                                        src="https://maps.google.com/maps?hl=en&amp;q=fleet%20street%2066&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                                </iframe>
                                <div id="googlemaps-div-2">
                                    <small>
                                        <a href="https://googlemapsembed.net/">Embed Google Map</a>
                                    </small>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-around align-items-center min-w-75" id="social-holder"
                         style={{position: "relative"}}>
                        <img src="../images/social-holder.png" alt="" id="social-holder-background"/>
                        <div id="social-links">

                            <a className="light social-icon"
                               href="https://www.facebook.com/Directors-cut-106317441329059"><FontAwesomeIcon
                                icon={faFacebook}
                            /></a>
                            <a className="light social-icon"
                               href="https://www.instagram.com/thelittlehairstudioszeged/?hl=hu"><FontAwesomeIcon
                                icon={faInstagram}
                            /></a>
                            <a className="light social-icon"
                               //youtube delete original account because it's spam like
                               href="https://www.youtube.com/user/TheBeardbrand"><FontAwesomeIcon
                                icon={faYoutube}
                            /></a>

                        </div>
                    </div>
                </div>
            </section>
            <div className="justify-content-center" id="divider-wrapper">
                <img className="divider" src="../images/paper-trim.png " alt=""/>
            </div>
        </div>
    }
}

export default Contact;