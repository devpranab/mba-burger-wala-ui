import React from "react";
import './Menu.scss';
import MenuCard from "./MenuCard";
import burger1 from "../../../assets/images/burger1.png";
import burger2 from "../../../assets/images/burger2.png";
import burger3 from "../../../assets/images/burger3.png";

const Menu = () => {
    const addToCartHandler = itemNum => {
        console.log("addToCartHandler click");
    };
  
    return (
      <section id="menu">
        <h1>MENU</h1>
  
        <div>
          <MenuCard
            itemNum={1}
            burgerSrc={burger1}
            price={200}
            title="Cheese Burger"
            handler={addToCartHandler}
            delay={0.1}
          />
          <MenuCard
            itemNum={2}
            burgerSrc={burger2}
            price={250}
            title="Veg Cheese Burger"
            delay={0.5}
            handler={addToCartHandler}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            price={300}
            title="Cheese Burger with French Fries"
            delay={0.8}
            handler={addToCartHandler}
          />
        </div>
      </section>
    );
  };
  
  export default Menu;