import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route'
import LandIn from '~/pages/LandIn';
import LandInBr from '~/pages/LandInBr';
import SignInPhonenumber from '~/pages/SignInPhonenumber';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import UpdateProfile from '~/pages/Profile';

import Home from '~/pages/Home';

import Tutorial from '~/pages/Tutorial';
import Privacy from '~/pages/Privacy';
// -----------------------------------------------------------------------------
export default function Routes() {
// -----------------------------------------------------------------------------
  return (
    <Switch>
      <Route path="/en" exact component={LandIn} />
      <Route path="/" exact component={LandInBr} />
      <Route path="/login" exact component={SignInPhonenumber} />
      <Route path="/password" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/profile" exact component={UpdateProfile} isPrivate/>

      <Route path="/home" exact component={Home} isPrivate/>

      <Route path="/tutorial" exact component={Tutorial} isPrivate/>
      <Route path="/privacy" exact component={Privacy}/>
    </Switch>
  );
}
