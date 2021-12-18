import React, { useState, useEffect } from "react";
import "./index.css";
import Loading from "./Loading";
import Beers from "./Beers";

const url = "https://api.punkapi.com/v2/beers";

function App() {
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [footer, setFooter] = useState(true);

  // function for remove button for beer selection
  const removeItem = (id) => {
    const newItem = beers.filter((beer) => beer.id !== id);
    setBeers(newItem);
  };

  const fetchBeers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const beers = await response.json();
      setLoading(false);
      setBeers(beers);
      // console.log(beers);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Beers beers={beers} removeItem={removeItem} />
    </main>
  );
}

export default App;
