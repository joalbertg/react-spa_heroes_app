import React from 'react';
import { mount } from 'enzyme';

import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';
import { demoAuth } from '../fixtures/demoAuth';

describe('Tests AppRouter component', () => {
  test('Should login screen if unauthenticated', () => {
    const contextValue = {
      user: demoAuth,
      dispatch: jest.fn()
    }

    const wrapper = mount(
      // reference HeroesApp
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text()).toBe('Login');
    expect(wrapper.find('button').text()).toBe('Login');
  });

  test('Should marvel screen if is authenticated', () => {
    const user = {
      name: 'Joalbert',
      logged: true
    };

    const contextValue = {
      user,
      dispatch: jest.fn()
    };

    const wrapper = mount(
      // reference HeroesApp
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBeTruthy();
    expect(wrapper.find('div ul > span').text()).toBe(user.name);
    expect(wrapper.find('div ul button.nav-item').text()).toBe('Logout');
  });
});

