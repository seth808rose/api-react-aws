import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import Main from "./Main";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const App = ({ signOut }) => {
  return (
    <Router>
      <>
        <h1>Hello</h1>
        <div className='signout-button'>
          <button className='btn' onClick={signOut}>
            Sign out
          </button>
        </div>
      </>
      <nav className='navbar'>
        <Link to='/' className='navbar-link'>
          Home
        </Link>
        <Link to='/Main' className='navbar-link'>
          Beer API
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Main' element={<Main />}></Route>
      </Routes>
    </Router>
  );
};

export default withAuthenticator(App);
