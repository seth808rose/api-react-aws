import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Beers from "./Beers";
import ScrollButton from "./ScrollButton";

// URL
const url = "https://api.punkapi.com/v2/beers";
// ===================================================

const Main = () => {
  // useState setUp
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  // =================================================

  // removeItem functionality
  const removeItem = (id) => {
    const newItem = beers.filter((beer) => beer.id !== id);
    setBeers(newItem);
  };

  // async await fetch function
  const fetchBeers = async () => {
    setLoading(false);
    try {
      const response = await fetch(url);
      const beers = await response.json();
      //   console.log(beers);
      setLoading(false);
      setBeers(beers);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // ========================================================

  // useEffect
  useEffect(() => {
    fetchBeers();
  }, []);
  // ======================================================

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
      <footer>
        <ScrollButton />
      </footer>
    </main>
  );
};

export default Main;
