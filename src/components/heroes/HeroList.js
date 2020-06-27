import React from 'react';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

//import './styles.css';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return(
    <div className="card-columns">
      {
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            hero={hero}
          >
            {hero.superhero}
          </HeroCard>
        ))
      }
    </div>
  );
}

