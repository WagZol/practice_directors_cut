import React, {Component} from "react";
import '../css/skewButtonElement.css';

class SkewButtonElement extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (<a className={`skewButton ${this.props.class}`} href={this.props.href}>
            <p>
                <span className="bg">
                </span>
                <span className="base">
                </span>
                <span className="text">
                    {this.props.text}
                </span>
            </p>
        </a>)
    }
}

export default SkewButtonElement;