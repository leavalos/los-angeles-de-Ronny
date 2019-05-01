import React, { Component } from 'react';
import Page from './components/componenteConSonido/ComponentePrincipal'
import ComponenteABM from './components/ABM/ComponenteABM'
import ComponenteA from './components/ABM/ComponenteA'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {Dropdown, Button, ButtonToolbar} from "reactstrap"

//import Root from './Root';


class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
         
          <Route exact path="/usuarios" render={proops => <ComponenteABM  />}/>
          <Route exact path="/user/new" render={proops => <ComponenteA  />}/>
            
     
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
