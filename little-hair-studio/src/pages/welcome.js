import * as React from "react";
import '../css/Welcome.css';

class Welcome extends React.Component {
    render() {

        return <div>

            <section className="min-vh-100" id="welcome">
                <div className="d-flex container justify-content-center">
                    <div className="row mt-4">
                        <div id="welcome-text"
                             className="d-flex flex-column col-lg-7 col-md-6 col-sm-12 justify-content-center">
                            <h2 className="light">BEMUTATKOZÁS</h2>
                            <span className="light">
                                2017 december 7-én nyitottam meg a szolonom, ahol a kreativitás, divat és a humor mindmáig jól megférnek egymás melett.
                                Ha szeretnél egy vagány sérót, de nincs fix elképzelésed, vagy van de eddig még senki nem tudta megvalósítani úgy ahogy azt te akartad, akkor én vagyok a te embered!
                                <br/>
                                <br/>
                                Hozd el a hajad és vágjunk bele!
                            </span>
                        </div>
                        <div className="d-flex flex-column col-lg-5 col-md-6 col-sm-12 justify-content-center">
                            <img id="workstation" src="../images/workstation-art.png" alt=""
                                 className="align-content-center"/>
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

export default Welcome;