import * as React from "react";
import './CustomPrice.css';

const CustomPrice = (props) => {

    if(props.salePrice) {
        return (
            <div className="prices">
                <div className="now-price">Now: ${props.salePrice}</div>
                <div className="was-price">Was: ${props.price}</div>
            </div>
        )
    } else {
        return (
            <div className="prices">
                <div className="regular-price">$ {props.price}</div>
            </div>
        )
    }
}


export default CustomPrice;