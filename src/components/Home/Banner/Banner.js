import React from 'react';
import './Banner.scss';

const Banner = () => {
    return (
        <section className="home">
         <div>
            <h1>MBA Burger Wala</h1>
            <p>Give yourself a testy burger!</p>
        </div>
        <a href="#menu">Explore Menu</a>
        </section>
    );
};

export default Banner;