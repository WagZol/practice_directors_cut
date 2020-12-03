import * as React from "react";
import FbImageLibrary from 'react-fb-image-grid';
import '../css/galery.css';
import imageList from '../images/galery/images';


class Galery extends React.Component {
    render() {
        return <div>
            <section className="d-flex min-vh-100" id="galery">
                <div id="galery-body" className="d-flex container justify-content-center">
                    <h2 className="light text-center mb-5">GALÉRIA</h2>
                    <FbImageLibrary images={imageList} renderOverlay={()=>'Előnézet'}/>

                </div>
            </section>
            <div className="justify-content-center" id="divider-wrapper">
                <img className="divider" src="../images/paper-trim.png " alt=""/>
            </div>
        </div>
    }
}

export default Galery;