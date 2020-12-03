import * as React from "react";
import '../css/social.css';
import Script from 'react-script-tag';


class Social extends React.Component {


    render() {
        return <div>
            <section className="d-flex min-vh-100" id="social">
                <div className="d-flex container justify-content-center">
                    <h2 className="dark text-center">ÜZENÖFAL</h2>

                    <img src="../images/social-divider-1.png" alt="" className="w-100"/>
                    <div>
                    <Script async src="https://walls.io/js/wallsio-widget-1.2.js"
                            data-wallurl="https://walls.io/p4my3?nobackground=1&amp;show_header=0"
                            data-title="My social wall" data-width="100%" data-autoheight="1" data-height="800"
                            data-lazyload="1"/>
                    </div>
                    <img src="../images/social-divider-1.png" alt="" className="w-100"/>
                </div>


            </section>
            <div className="justify-content-center" id="divider-wrapper">
                <img className="divider" src="../images/paper-trim.png " alt=""/>
            </div>
        </div>
    }
}

export default Social;