import React, { useMemo } from 'react';
import {
  useParams,
  Redirect
} from 'react-router-dom';

import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if(!hero) return <Redirect to='/' />;

  const handleReturn = () => {
    if(history.length <= 2) {
       hero.publisher === 'Marvel Comics' && history.push('/');
       hero.publisher === 'DC Comics' && history.push('/dc');
    } else {
      history.goBack();
    }
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  return(
    <div className="row mt-5">
      <div className="col-4">
        <img className='img-thumbnail' src={`../assets/heroes/${heroId}.jpg`} alt={superhero} />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul>
          <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
          <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
}