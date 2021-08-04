import * as React from "react";
import './CardHeader.css'

function CardHeader(props) {
   if(props.aired === 'true' ) {
    return (
        <div className="aired">
            Recently on air
        </div>
    )
   } else return (null)
}

export default CardHeader;