import * as React from "react";
import { Rating } from '@sajari/react-components';
import './CustomRating.css';


function CustomRating(props) {

    const numReviews = props.numRatings;
    const renderReviews = () => {
       if(numReviews === '0') {
            return null;
        } else {
            return `(${numReviews})`;
        }
    }

    return (
        <div className="rating">
            <span className="rating__rating">
                <Rating value={props.rating}/>
            </span>
            <span className="rating__num">
                {renderReviews()}
            </span>
        </div>
    )
}

export default CustomRating;