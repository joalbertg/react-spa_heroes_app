import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, useHistory } from 'react-router-dom';

import { AuthContext } from '../../../auth/AuthContext';
import { demoAuth } from '../../fixtures/demoAuth';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

// reference of function
const mockHistoryReplace = jest.fn();
jest.mock('react-router-dom', () => {
  const originReactRouterDom = jest.requireActual('react-router-dom');
  //console.log("==>",originReactRouterDom);

  return {
    ...originReactRouterDom,
    useHistory: () => ({
      replace: mockHistoryReplace,
    }),
  };
});

describe('Tests Navbar component ', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const { login, logout } = demoAuth;
  const contextValue = {
    user: login,
    dispatch: jest.fn()
  }

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('Should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBeTruthy();
    expect(wrapper.find('div ul > span').text()).toBe(login.name);
    expect(wrapper.find('div ul button.nav-item').text()).toBe('Logout');
  });

  test('Should call logout function and use history', () => {
    wrapper.find('button').prop('onClick')();

    expect(contextValue.dispatch).toHaveBeenCalled();
    expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.LOGOUT });
    expect(mockHistoryReplace).toHaveBeenCalled();
    expect(mockHistoryReplace).toHaveBeenCalledTimes(1);
    expect(mockHistoryReplace).toHaveBeenCalledWith('/login');
  });
});

