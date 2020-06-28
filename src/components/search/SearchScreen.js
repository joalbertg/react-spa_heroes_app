import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const { searchText } = formValues;
  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);
  const handleSearch = event => {
    event.preventDefault();
    if(searchText.trim().length < 3) return;

    history.push(`?q=${searchText}`);
  }

  return(
    <div className='row'>
      <div className='col-5'>
        <h4>Search</h4>
        <hr />

        <form onSubmit={handleSearch}>
          <input
            type='text'
            name='searchText'
            placeholder='Find your favorite hero'
            className='form-control'
            autoComplete="off"
            value={searchText}
            onChange={handleInputChange}
          />
          <button
            className='btn btn-outline-primary btn-block mt-1'
            type='submit'
          >
            Search...
          </button>
        </form>
      </div>
      <div className='col-7'>
        <h4>Results</h4>
        <hr />
        {
          (q === '')
            &&
            <div className="alert alert-info">Search a hero</div>
        }
        {
          (q !== '' && heroesFiltered.length === 0)
            &&
            <div className="alert alert-danger">There is no a hero with {q}</div>
        }
        {
          heroesFiltered.map(hero => (
            <HeroCard
              key={hero.id}
              hero={hero}
              className="animate__animated animate__fadeIn"
            />
          ))
        }
      </div>
    </div>
  );
}

