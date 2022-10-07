import React, { useEffect, useState } from "react";
// import P1 from "../../images/products/f1.jpg";
import "../css/ProductCardStyles.css";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai"

import axios from "axios"
import { useNavigate } from "react-router-dom";

const ProductCard = () => {

  const navigate = useNavigate()

  return (
  <div className="product_details">  
        <a href="https://www.firstcry.com/turtledove-london/turtledove-london-layering-organic-cotton-full-sleeves-organic-top-grey/9643994/product-detail">
        <div className="product_container_productcard">
            <img  className='imagesproduct' src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/9643994a.webp" alt="" />
           <div className="description_productcard">
           <span>Clothes</span>
           <h5>Turtledove London Top - Grey</h5>
           <span>0 to 6 Months, Comfortable cotton round neck pullover top for your girls and boys</span>
           <div className="star_section_productcard">
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
           </div>
           <h4>&#x20B9;  120</h4>
         </div>
         <div className="cart_icon_container_productcard">
           <AiOutlineShoppingCart className="cart_icon_productcard" />
         </div>
        </div>
        </a>

        <a href="https://www.firstcry.com/deals-india/deals-india-combo-of-8-super-soft-plush-soft-toys-multicolor-height-25-cm/9629600/product-detail">
        <div className="product_container_productcard">
            <img  className='imagesproduct' src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/9629600a.webp" alt="" />
           <div className="description_productcard">
           <span>Toys</span>
           <h5>Super Soft Plush Soft Toys Multicolor</h5>
           <span>3 Years +, B 20 x 35 cm, Develops social and emotional growth, great plush toy for your kid</span>
           <div className="star_section_productcard">
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
           </div>
           <h4>&#x20B9;  1049</h4>
         </div>
         <div className="cart_icon_container_productcard">
           <AiOutlineShoppingCart className="cart_icon_productcard" />
         </div>
        </div>
        </a>

        <a href="https://www.firstcry.com/giggles/giggles-nico-the-giraffe-yellow/912753/product-detail">
        <div className="product_container_productcard">
            <img  className='imagesproduct' src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/912753a.webp" alt="" />
           <div className="description_productcard">
           <span>Toys</span>
           <h5>Giggles Nico The Giraffe - Yellow</h5>
           <span>18 Months+, Encourages toddlers to walk and improve motor skills for babies</span>
           <div className="star_section_productcard">
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
           </div>
           <h4>&#x20B9;  919</h4>
         </div>
         <div className="cart_icon_container_productcard">
           <AiOutlineShoppingCart className="cart_icon_productcard" />
         </div>
        </div>
        </a>

        <a href="https://www.firstcry.com/babyoye/babyoye-cotton-cap-mittens-and-booties-floral-print-peach-circumference-49-cm/11603618/product-detail">
        <div className="product_container_productcard">
            <img  className='imagesproduct' src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/11603618a.webp" alt="" />
           <div className="description_productcard">
           <span>Clothes</span>
           <h5>Babyoye Cotton Cap Mittens</h5>
           <span>Preemie, Mittens Length 8 cm, Snug mittens & booties set with knit fabric for little one's</span>
           <div className="star_section_productcard">
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
             <AiFillStar className="rating_icon_productcard"/>
           </div>
           <h4>&#x20B9;  394</h4>
         </div>
         <div className="cart_icon_container_productcard">
           <AiOutlineShoppingCart className="cart_icon_productcard" />
         </div>
        </div>
        </a>

        </div>

        
  );
};

export default ProductCard;
