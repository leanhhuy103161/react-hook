import React from 'react'
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

import FormSubmit from './components/FormSubmit';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import ImageContent from './pages/ImageContent'
import NoMatch from './pages/NoMatch';




function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
         {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Navbar />
            <FormSubmit />
            <ImageContent />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div> 
    </BrowserRouter>
  );
}

export default App;
