import React, { useState } from "react";
import welcomeInfo from "./data";

const Home = () => {
  const [showInfo, setShowInfo] = useState(welcomeInfo);
  const [readMore, setReadMore] = useState(false);
  return (
    <div className='home-p'>
      <p>
        {showInfo.map((welcome) => (
          <p>{welcome.info}</p>
        ))}
      </p>
    </div>
  );
};

export default Home;
