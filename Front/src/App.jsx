import React, { Component } from 'react';
import ComponenteABM from './components/ABM/ComponenteABM'
import ComponenteM from './components/ABM/ComponenteM'
import ComponenteA from './components/ABM/ComponenteA'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


//import Root from './Root';


class App extends Component {

  render() {
    return (
      <div >
        <BrowserRouter>
          <Switch>
            <Route exact path="/usuarios" render={proops => <ComponenteABM {...proops}  />}/>
            <Route exact path="/user/new" render={proops => <ComponenteA {...proops} />}/>
            <Route exact path="/user/:id" render={proops => <ComponenteM {...proops} />}/>   
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
