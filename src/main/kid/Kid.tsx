import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AsyncComponent } from '../../LazyRoute';

export default class Kid extends React.Component {
  render() {
    return (
      <p>
        <p>
          <Link to="/main/kid/home">Kid</Link>
          <Link to="/main/kid/earn">Earn</Link>
          <Link to="/main/kid/rewards">Rewards</Link>
        </p>
        <p>Kid</p>
        <Switch>
          <Route path="/main/kid/home" component={AsyncComponent(() => import('./home/Home'))} />
          <Route path="/main/kid/earn" component={AsyncComponent(() => import('./earn/Earn'))} />
          <Route path="/main/kid/rewards" component={AsyncComponent(() => import('./rewards/Rewards'))} />
        </Switch>
      </p>
    );
  }
}
