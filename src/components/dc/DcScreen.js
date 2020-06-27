import React from 'react';

import { HeroList } from '../heroes/HeroList';

//import './styles.css';

export const DcScreen = () => {
  return(
    <>
      <h1>DC Screen</h1>
      <hr />

      <HeroList publisher='DC Comics' />
    </>
  );
}
