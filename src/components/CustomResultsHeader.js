import * as React from "react";
import './CustomResultsHeader.css';
import { Pagination, Sorting, Summary } from '@sajari/react-search-ui';

function CustomResultsHeader() {
    return (
        <div className="w-11/12 mx-auto grid grid-cols-4 pt-10 relative results-header items-center">
            <div className="results-header__summary pr-5 mr-10">
                <Summary/>
            </div>
            <div className="results-header__pagination col-span-2">
                <Pagination/>
            </div>
            <div className="results-header__sorting">
            <Sorting
                type="select"
                options={[
                    { name: 'Most relevant', value: '' },
                    { name: 'Name: A to Z', value: 'Title' },
                    { name: 'Name: Z to A', value: '-Title' },
                    { name: 'Rating: Low to High', value: 'rating' },
                    { name: 'Rating: High to Low', value: '-rating' },
                    { name: 'Most reviewed', value: '-reviews' },
                ]}
        />
            </div>
        </div>
    ) 

}

export default CustomResultsHeader;