import React, { useMemo } from 'react';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => {
    return getHeroesByPublisher(publisher);
  }, [publisher]);

  return(
    <div className="card-columns">
      { heroes &&
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            hero={hero}
          />
        ))
      }
    </div>
  );
}
