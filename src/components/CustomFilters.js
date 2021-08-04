import * as React from "react";
import './CustomFilters.css';
import { Filter } from "@sajari/react-search-ui";
import { useSearchContext } from "@sajari/react-hooks";
import { useQuery } from "@sajari/react-hooks";

function CustomFilters() {
    const { resetFilters } = useSearchContext();
    const { setQuery } = useQuery();

    const resetAllFilters = () => {
        resetFilters();
        setQuery('');
    }

    return (
        <div className="mr-10 pr-5 sticky h-screen overflow-y-scroll top-0">
            <div className="mb-5">
                <button type="button" className="btnn" onClick={resetAllFilters}>Reset all</button>
            </div>
             <div className="mb-5">
                <Filter name="onAir" title="Recently on air"/>
            </div>  
            <div className="mb-5">
                <Filter name="category" type="list" placeholder="Search Categories" title="Category" excludes="Jewelry,Promotions,Brands,Home,Aired,Turquoise,Diy,Home-Accents,Colors,New Arrival,November,online-store,clearance,Gems-Sea"/>
            </div>
            <div className="mb-5">
                <Filter type="list" name="price" title="Price"/>
            </div>
            <div className="mb-5">
                <Filter name="gemstone" placeholder="Search Gemstones" title="Gemstone"/>
            </div>
            <div className="mb-5">
                <Filter name="material" placeholder="Search Material" title="Material"/>
            </div>
            <div className="mb-5">
                <Filter type="list" name="size" placeholder="Search Size" title="Size"  excludes="7.25 inches, 8 inches, 6.50 inches, L, M, L/XL, M/L, S/M, King, Queen, XXL, XXXL, 2X, XL/XXL, 3X, 7.50 inches, 6.75 inches, 7 inches, 1X, Full, 7.75 inches, XS, 22 Inch,8.50 inches, California King, 18 Inch, 20 Inch, 24 Inch, 24 Inches, 6.00 inches, 16 Inch, 30 Inch, 4X, Large, Medium, XXL/XXXL, 38, 28 inches, 20 inches, 5-6, 3XL, 6.25 inches, Full/Queen, 29 inches, PL, PM, PS, PXS, 18 inches, 9 Inches, 24 inches"/>
            </div>
            <div className="mb-5">
                <Filter type="color" name="colour" title="Colour Options"/>
            </div>
        
        </div>
    )
}

export default CustomFilters;