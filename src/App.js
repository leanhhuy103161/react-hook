import React from 'react'
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

import FormSubmit from './components/FormSubmit';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import ImageContent from './pages/ImageContent'
import NoMatch from './pages/NoMatch';
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
         {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            {/* <Sidebar /> */}
            <FormSubmit />
            <ImageContent />
          </Route>
          <Route path="/about">
            {/* <Sidebar /> */}
            <About />
          </Route>
          <Route path="/contact">
            {/* <Sidebar /> */}
            <Contact />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
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
