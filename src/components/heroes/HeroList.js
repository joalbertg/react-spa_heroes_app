import React from 'react';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

//import './styles.css';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return(
    <ul>
      {
        heroes.map(hero => (
          <li key={hero.id}>{hero.superhero}</li>
        ))
      }
    </ul>
  );
}

