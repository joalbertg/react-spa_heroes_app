import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { DashboadRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';
import { demoAuth } from '../fixtures/demoAuth';

describe('Tests DashboardRoutes component', () => {
  const { login, logout } = demoAuth;
  const contextValue = {
    user: login,
    dispatch: jest.fn()
  }

  test('Should display correctly', () => {
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <DashboadRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBeTruthy();
    expect(wrapper.find('div ul > span').text()).toBe(login.name);
    expect(wrapper.find('div ul button.nav-item').text()).toBe('Logout');
  });
});

