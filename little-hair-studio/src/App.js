import React from 'react';

import Galery from "./pages/galery";
import './App.css';
import Services from "./pages/services";
import WelcomePage from './pages/welcome';

import Social from "./pages/social";
import Contact from "./pages/contact";
import NavbarElement from "./elements/NavbarElement";

function App() {
    return (
        <div className="scroll-snap-wrapper vh-100">
            <NavbarElement/>
            <WelcomePage/>
            <Services/>
            <Galery/>
            <Social/>
            <Contact/>
        </div>
    );
}

export default App;
