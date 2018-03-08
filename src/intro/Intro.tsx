import * as React from 'react';
import { Switch, Route } from 'react-router';
import { AsyncComponent } from '../LazyRoute';
import { Link } from 'react-router-dom';

export default class Intro extends React.Component {
  render() {
    return (
      <>
        <>
          <Link to="/intro/login">Login</Link>
        </>
        <p>Intro</p>
        <Switch>
          <Route path="/intro/login" component={AsyncComponent(() => import('./login/Login'))} />
        </Switch>
      </>
    );
  }
}
