import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Test PrivateRoute component', () => {
  const props = {
    location: {
      pathname: '/marvel',
      search: '?q=spiderman'
    }
  }

  test('Should showed if authtenticated and save to localStorage', () => {
    Storage.prototype.setItem = jest.fn();
    // shallow only rendered a first component
    // const wrapper = mount(
    const wrapper = mount(
      // for this mistake
      // Invariant failed: You should not use <Route> outside a <Router>
      // must be use MemoryRouter component
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Done!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    const { pathname, search } = props.location;

    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', pathname + search);
  });

  test('Should not be displayed and not must be called to localStorage if unauthenticated', () => {
    Storage.prototype.setItem = jest.fn();

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Done!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);
    expect(wrapper.html()).toBe('');
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});

