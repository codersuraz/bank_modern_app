import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section id="card_deal" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
         Find a better card deal 
          <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          repellat veniam pariatur sapiente unde sed, est ex dignissimos at
          perspiciatis laudantium dolore dolorem inventore porro aspernatur
          soluta quidem repudiandae commodi!
        </p>
        <Button styles={'mt-10 rounded-md'}/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-full h-full relative z-10" />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </div>
    </section>
  );
};

export default CardDeal;
