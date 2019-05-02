import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './components/componenteConSonido/ComponentePrincipal'
import ComponenteABM from 'C:/Users/Lucas/Desktop/my-app/los-angeles-de-Ronny/src/components/ABM/ComponenteABM.jsx'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


//import Root from './Root';


class App extends Component {
  render() {
    return (
      <div >

        <BrowserRouter>
         <Switch>
              <Route exact path="/usuarios" render={proops => <ComponenteABM  />}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
