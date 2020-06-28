import React from 'react';

import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';
import { demoAuth } from '../fixtures/demoAuth';

describe('Test authReducer', () => {
  test('Should return default user value', () => {
    const user = authReducer(demoAuth, {});

    expect(typeof user).toBe('object');
    expect(user.logged).toBeFalsy();
    expect(user).toEqual(demoAuth);
  });

  test('Should add a user', () => {
    const newUser = {
      name: 'Joalbert'
    };

    const user = authReducer(demoAuth, { type: types.LOGIN, payload: newUser });

    expect(user.logged).toBeTruthy();
    expect(user.name).toBe(newUser.name);
  });

  test('Should remove a user', () => {
    const user = authReducer(demoAuth, { type: types.LOGOUT });

    expect(user.logged).toBeFalsy();
    expect(user.name).toBeFalsy();
  });
});

