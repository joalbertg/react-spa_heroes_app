import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from '../components/ui/Navbar';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboadRoutes = () => {
  return(
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path='/hero/:heroId' component={HeroScreen} />
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/search' component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}

