import React from "react";
import Beer from "./Beer.jsx";

const Beers = ({ beers, removeItem }) => {
  return (
    <section>
      <div className='title'>
        <h2>got beer?</h2>
        <div className='underline'></div>
      </div>
      <div>
        {beers.map((beer) => {
          return <Beer key={beer.id} {...beer} removeItem={removeItem}></Beer>;
        })}
      </div>
    </section>
  );
};

export default Beers;
