import * as React from "react";
import { useSearch } from "@sajari/react-hooks";
import CustomPrice from './CustomPrice';
import CustomRating from './CustomRating';
import CardHeader from './CardHeader';
// import Promo from './CustomPromo';
import './CustomResults.css';

const CustomResults = () => {
    
    const {results = []} = useSearch(); 

    const renderResult = (result) => {
        return (
            <div className="card relative" key={result.values.SKU_update}>
                  <a href={result.values.url}>
                    <CardHeader aired={result.values.aired}/>
                    <div className="result-image" >
                        <img src={result.values.image} alt={result.values.Title} />
                    </div>
                    {/* <Promo promo={result.values.promo}/> */}
                        <div className="result-name mb-2">
                            <h3 className="result-name__title">
                                {result.values.Title}
                            </h3>
                        </div>
                        <CustomRating rating={result.values.rating} numRatings={result.values.reviews}/>
                        <CustomPrice price={result.values.buyNowPrice} salePrice={result.values.salePrice}/>
                        </a>
            </div>
        )
    }

    return (
        <div className="col-span-3 xl:mx-auto grid grid-cols-5 gap-10">
            {results.map(renderResult)}
        </div>
    );
}

export default CustomResults;

