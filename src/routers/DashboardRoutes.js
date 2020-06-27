import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';

//import './styles.css';

export const DashboadRoutes = () => {
  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path='/hero/:heroId' component={HeroScreen} />
        <Route exact path='/marvel' component={MarvelScreen} />
        <Route exact path='/dc' component={DcScreen} />

        <Redirect to="/marvel" />
      </Switch>
    </>
  );
}
