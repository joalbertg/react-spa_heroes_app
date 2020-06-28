import { heroes } from '../data/heroes';

export const getHeroByName = name => {
  const regex = new RegExp(name, 'i');
  return name ? heroes.filter(hero => regex.exec(hero.superhero) && hero): [];
}

