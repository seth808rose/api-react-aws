import React from "react";

const Home = () => {
  return (
    <div className='home-p'>
      <p>
        Hello and welcome to my beer api project. Tools used for this project
        are Reactjs as the frontend and AWS Amplify for the backend. Amplify is used for
        hosting and authentication. At the bottom of the 'Beer API' section,
        you'll find a button that has the 'scroll to top' functionality which
        was pretty fun in it of itself. I also used 'react-router' for page
        routing etc.I wanted to showcase my skills by calling a random API url
        found off the net and by using async await and fetch functionality to
        call the beer data to the ui. Styles with basic CSS styling and what we
        get is a beer collection with the beers including their names,
        description, tagline along with an ugly image of the beer bottle.
        Fortunatly for this project, pixel perfect images wasn't the main goal
        here but more or less the API functionality ties together with a backend
        and authenticated sign in process.{" "}
      </p>
    </div>
  );
};

export default Home;
