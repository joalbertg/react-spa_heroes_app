import React from 'react';
import { mount } from 'enzyme';

import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { demoAuth } from '../../fixtures/demoAuth';
import { types } from '../../../types/types';

describe('Tests LoginScreen component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const history = {
    replace: jest.fn()
  }

  const { login, logout } = demoAuth;
  const contextValue = {
    user: logout,
    dispatch: jest.fn()
  }

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <LoginScreen history={history} />
    </AuthContext. Provider>
  );

  test('Should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text()).toBe('Login');
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button').text()).toBe('Login');
  });

  test('Should call dispatch function', () => {
    const dispatchObj = {
      type: types.LOGIN,
      payload: { name: login.name }
    }

    wrapper.find('button').prop('onClick')();

    expect(contextValue.dispatch).toHaveBeenCalled();
    expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
    expect(contextValue.dispatch).toHaveBeenCalledWith(dispatchObj);
    expect(history.replace).toHaveBeenCalled();
    expect(history.replace).toHaveBeenCalledTimes(1);
    expect(history.replace).toHaveBeenCalledWith('/');
  });

  test('Should call dispatch function with lastPath', () => {
    const lastPath = '/dc';
    const handleClick = wrapper.find('button').prop('onClick');

    localStorage.setItem('lastPath', lastPath);

    handleClick();

    expect(history.replace).not.toHaveBeenCalledWith('/');
    expect(history.replace).toHaveBeenCalledWith(lastPath);
  });

});

