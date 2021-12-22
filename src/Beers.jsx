import React, { useState } from "react";

const Beers = ({ beers, removeItem }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section>
      <div className='title'>Got Beer?..</div>
      <div>
        {beers.map((beer) => {
          const { image_url, id, name, description, tagline } = beer;
          return (
            <main className='single-beer'>
              <img src={image_url} alt={name} />
              <h2>{name}</h2>
              <footer>
                <p>
                  {readMore
                    ? description
                    : `${description.substring(0, 100)}...`}{" "}
                  <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "show less" : "read More"}
                  </button>
                </p>
                <div>
                  <h4>Also Known As:</h4>
                  <h4 className='tagline-color'>{tagline}</h4>
                </div>
                <button className='delete-btn' onClick={() => removeItem(id)}>
                  remove beer
                </button>
              </footer>
            </main>
          );
        })}
      </div>
    </section>
  );
};

export default Beers;
