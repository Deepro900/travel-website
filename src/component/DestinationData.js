import { Component } from "react";
import cox1 from '../assets/cox1.jpg';
import cox2 from '../assets/cox2.jpg';
import cox3 from '../assets/cox1.jpg';
import "./DestinationStyles.css";

class DestinationData extends Component {
    render() {
        return (

            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1} />
                    <img alt="img" src={this.props.img2} />
                </div>
            </div>
        )
    }
}

export default DestinationData