import React, {Component} from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import {BrowserRouter as Router} from 'react-router-dom';
import {HamburgerSpring} from "react-animated-burgers";
import SkewButtonElement from "./SkewButtonElement";
import '../css/NavbarElement.css'

class NavbarElement extends Component {
    state = {
        isOpen: false,
        relativeScrollPosition: window.innerHeight,
        width: '100%'
    };

    componentDidMount() {
        const scrollSnapWrapper = document.querySelector(".scroll-snap-wrapper")
        scrollSnapWrapper.addEventListener("scroll", () => {
            let absoluteScrollPosition = scrollSnapWrapper.scrollY || scrollSnapWrapper.scrollTop;
            this.setState({
                relativeScrollPosition: window.innerHeight - absoluteScrollPosition < 0 ? 0 : window.innerHeight - absoluteScrollPosition
            })
            console.log(`relative: ${this.state.relativeScrollPosition}`);
            console.log(`absolute: ${absoluteScrollPosition}`);
        })

        const navLinks = document.querySelectorAll(".skewButton, nav-link");
        navLinks.forEach(item => item.addEventListener("click", (event) => {

            event.preventDefault();

            const elementSelectorToScroll=item.getAttribute('href');
            console.log(elementSelectorToScroll);
            document.querySelector(elementSelectorToScroll).scrollIntoView({
                behavior: 'smooth'
            })
        }))

        this.setState({width: `${document.querySelector('.scroll-snap-wrapper').clientWidth}px`});

    }

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    scrollToElement = (elementSelector) => {
        console.log(elementSelector)

        console.log(document.querySelector(elementSelector))
        document.querySelector(elementSelector).scrollIntoView({
            behavior: 'smooth'
        });

    }

    render() {
        console.log(document.querySelector('.scroll-snap-wrapper'));
        return (
            <Router>
                <MDBNavbar color="default-color" dark expand="md" style={{
                    backgroundColor: `rgba(75,175,120, ${0.4 + 0.6 * (1 - this.state.relativeScrollPosition / window.innerHeight)})`,
                    width: this.state.width

                }}>
                    {/*<MDBNavbarToggler onClick={this.toggleCollapse}/>*/}
                    <HamburgerSpring toggleButton={this.toggleCollapse} isActive={this.state.isOpen}
                                         barColor="gainsboro" buttonWidth="29" className="menu-button"/>
                    <img src="../images/Director's_cut_logo_small.png" alt="" className="header-logo-mobile d-block d-md-none"/>
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left className="left-spacer spacer">
                            <img src="../images/sider-left.png" className="sider-img d-none d-md-block"/>
                        </MDBNavbarNav>
                        <MDBNavbarNav>
                            <MDBNavItem>
                                {/*onClick={this.scrollToElement('#services')}*/}
                                {/*<MDBNavLink to="#services">Szolgáltatások</MDBNavLink>*/}
                                <SkewButtonElement text="Szolgáltatások" href="#services"/>
                            </MDBNavItem>
                            <MDBNavItem>
                                {/*<MDBNavLink to="#galery">Galéria</MDBNavLink>*/}
                                <SkewButtonElement text="Galéria" href="#galery"/>
                            </MDBNavItem>
                            <MDBNavbarBrand className="nav-link d-none d-md-block">
                                <div style={{
                                    minHeight: '100px',
                                    width: `${140 + (70 * (1 - (this.state.relativeScrollPosition / window.innerHeight)))}px`,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                }} className="logo-image">
                                    <img src="../images/Director's_cut_logo_lighter.png" alt="" className="logo-big header-logo"
                                         href="#welcome"
                                         style={{
                                             opacity: this.state.relativeScrollPosition / window.innerHeight,
                                             height: `${220 * (this.state.relativeScrollPosition / window.innerHeight)}px`,
                                             transform: `scale3d(${this.state.relativeScrollPosition / window.innerHeight}, ${this.state.relativeScrollPosition / window.innerHeight}, 1)`,
                                             position: 'relative'
                                         }}/>
                                    <img src="../images/Director's_cut_logo_small.png" alt="" href="#welcome" className="header-logo"
                                         style={{
                                             opacity: 1 - (this.state.relativeScrollPosition / window.innerHeight),
                                             position: `absolute`,
                                             margin: 'auto'
                                         }}/>
                                </div>

                            </MDBNavbarBrand>
                            <MDBNavItem>
                                <SkewButtonElement text="Üzenöfal" href="#social"/>
                            </MDBNavItem>
                            <MDBNavItem>
                                <SkewButtonElement text="Kapcsolat" href="#contact"/>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right className="right-spacer spacer">
                            <img src="../images/sider-right.png" className="sider-img d-none d-md-block"/>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
    }
}

export default NavbarElement;