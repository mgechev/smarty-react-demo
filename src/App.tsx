import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import { AsyncComponent } from './LazyRoute';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Link to="/intro">Intro</Link>
          <Link to="/main">Main</Link>
          <div>
            <Switch>
              <Route path="/intro" component={AsyncComponent(() => import('./intro/Intro'))} />
              <Route path="/main" component={AsyncComponent(() => import('./main/Main'))} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
