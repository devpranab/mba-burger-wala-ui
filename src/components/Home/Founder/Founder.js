import React from 'react';
import './Founder.scss';
import me from '../../../assets/images/me.jpg';
import { motion } from "framer-motion";

const Founder = () => {
    const options = {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
      };

    return (
        <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Pranav Sarkar</h3>

        <p>
          Hey, Everyone I am Pranav Sarkar, the founder of MBA Burger Wala.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
        </section>
    );
};

export default Founder;