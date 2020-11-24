import React, { Component } from 'react';
import {Switch , Route} from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Intro from "./containers/Intro/Intro";
import Portfolio from "./containers/Portfolio/Portfolio";
//import AboutMe from "./containers/AboutMe/AboutMe";
//import Contact from "./containers/Contact/Contact";

//fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faTh, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faTh, faUser, faEnvelope);

class App extends Component {
  render() {
    return (
             <Layout>
               <Switch>
                 <Route exact path="/" component={Intro}/>
                 <Route path="/portfolio" component={Portfolio}/>
                 {/*<Route path="/about" component={AboutMe}/>
                 <Route path="/contact" component={Contact}/> */}
               </Switch>
             </Layout>

    );
  }
}

export default App;
