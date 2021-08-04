import * as React from "react";
import logo from '../imgs/shop-lc.png';
import inside from '../imgs/Inside.svg';
import cart from '../imgs/Cart.svg';
import login from '../imgs/Login.svg';
import wishlist from '../imgs/Wishlist.svg';
import { Input } from "@sajari/react-search-ui";
import './CustomHeader.css';


const CustomHeader = () => {
    return (
        <div className="w-full bg-blue-100 p-4 mb-10">

          <div className="w-11/12 mx-auto flex flex-row flex-wrap justify-evenly">

            {/* Logo */}
            <div className="logo">
              <img src={logo}></img>
            </div>

            {/* Input */}
            <Input mode="suggestions" placeholder="Search ShopLC" className="mx-20 search-input flex-grow"/>

            {/* Icons */}
            <div className="icons flex items-center justify-evenly">

              <div className="icon-area text-center">
                <img src={inside} className="mx-auto mb-2"></img>
                <div className="icon-area__title">Inside LC</div>
              </div>

              <div className="icon-area ">
                  <img src={login} className="mx-auto mb-2"></img>
                  <div className="icon-area__title">Login/Join Us</div>
              </div>

              <div className="icon-area">
                <img src={wishlist} className="mx-auto mb-2"></img>
                <div className="icon-area__title">Wishlist</div>
              </div>

              <div className="icon-area">
                <img src={cart} className="mx-auto mb-2"></img>
                <div className="icon-area__title">Cart</div>
              </div>
                  
            </div>

          </div>
      </div>
    )
}

export default CustomHeader;