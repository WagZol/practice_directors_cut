import React, {Component} from "react";
import '../css/icons.css'
import Welcome from "../pages/contact";
import styled from 'styled-components';

// const filledIcon = styled.div`
//             &:before {
//                 transition-duration: 0.5s;
//                 box-shadow: inset 0 0 0 1px ${FilledIcon.props.fillColor};
//             }
//
//
//             &:before {
//                 box-shadow: inset 0 0 0 30px ${this.props.fillColor};
//             }
//         `;

class FilledIcon extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {};

    }

    render() {
        return (<div className="icon icon-fill">
        </div>)
    }
}

export default FilledIcon;