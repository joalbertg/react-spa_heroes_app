import React from 'react';
import { mount } from 'enzyme';
import {
  MemoryRouter,
  Route,
  useLocation
} from 'react-router-dom';

import { SearchScreen } from '../../../components/search/SearchScreen';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
     useLocation: jest.fn()
}));

describe('Tests SearchScreen component', () => {
  test('Should display correctly', () => {
    useLocation.mockReturnValueOnce({ search: '' });

    //const wrapper = mount(
    //  <MemoryRouter initialEntries={['/search']}>
    //    <Route path='/search' component={SearchScreen} />
    //  </MemoryRouter>
    //);
    const wrapper= mount(<SearchScreen />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.row > .col-5 > h4').text()).toBe('Search');
    expect(wrapper.find('input').exists()).toBeTruthy();
    expect(wrapper.find('.row .col-7 > h4').text()).toBe('Results');
    expect(wrapper.find('.alert.alert-info').text()).toBe('Search a hero');
  });

  test('Should return a batman card and set input with batman', () => {
    //const wrapper = mount(
    //  <MemoryRouter initialEntries={['/search?q=batman']}>
    //    <Route path='/search' component={SearchScreen} />
    //  </MemoryRouter>
    //);
    const hero = 'batman';
    const query = `q=${hero}`;
    useLocation.mockReturnValueOnce({ search: query });

    const wrapper= mount(
      <MemoryRouter>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe(hero);
    expect(wrapper.find('h5.card-title').text()).toBe('Batman');
  });

  test('Should call submit and return a superman card and set input with superman', () => {
    const hero = 'superman';
    const query = `q=${hero}`;
    const history = {
      push: jest.fn()
    }

    useLocation.mockReturnValueOnce({ search: query });

    const wrapper= mount(
      <MemoryRouter>
        <SearchScreen history={history} />
      </MemoryRouter>
    );

    wrapper.find('form').prop('onSubmit')({ preventDefault(){} });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe(hero);
    expect(wrapper.find('h5.card-title').text()).toBe('Superman');
    expect(history.push).toHaveBeenCalled();
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith('?' + query);
  });

  test('Should call submit and show error if hero not found', () => {
    const hero = 'anything';
    const query = `q=${hero}`;
    const history = {
      push: jest.fn()
    }

    useLocation.mockReturnValueOnce({ search: query });

    const wrapper= mount(
      <MemoryRouter>
        <SearchScreen history={history} />
      </MemoryRouter>
    );

    wrapper.find('form').prop('onSubmit')({ preventDefault(){} });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe(hero);
    expect(wrapper.find('h5.card-title').exists()).toBeFalsy();
    expect(wrapper.find('.col-7 .alert.alert-danger').text()).toBe(`There is no a hero with ${hero}`);
    expect(history.push).toHaveBeenCalled();
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith('?' + query);
  });
});

