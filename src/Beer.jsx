import React, { useState } from "react";

const Beer = ({
  image_url,
  name,
  id,
  description,
  food_pairing,
  removeItem,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className='single-beer'>
      <img src={image_url} alt='name' />
      <footer>
        <div className='beer-info'>
          <h4 className='title'>{name}</h4>
        </div>
        <p>
          {readMore ? description : `${description.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <div className='beer-info'>
          <h4 className='title'>food pairing</h4>
          <p>{food_pairing}</p>
        </div>
        <button onClick={() => removeItem(id)} className='delete-btn'>
          remove item
        </button>
      </footer>
    </div>
  );
};

export default Beer;
