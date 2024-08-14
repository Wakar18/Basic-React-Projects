import React from "react";
import Flipkartlogo from "..//..//assets/flipkartflipkart.png";
import Amazonlogo from "..//..//assets/amazonamazon.png";
import Shoeimage from "..//..//assets/shoe_imageshoe_image.png";
const HeroSection = () => {
  return (
    <div className="herosection-wrapper">
      <div className="herosection-part1">
        <h1 className="hersection-heading">YOUR FEET DESERVE THE BEST</h1>
        <h6 className="hersection-sub-heading">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </h6>
        <div className="herosection-btn">
          <button className="shopnow-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
      </div>
      <div className="shoe-image">
        <img src={Shoeimage} />
      </div>
    </div>
  );
};

export default HeroSection;
