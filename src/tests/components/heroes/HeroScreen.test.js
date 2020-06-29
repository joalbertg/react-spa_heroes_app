import React from 'react';
import { mount } from 'enzyme';
import {
  MemoryRouter,
  useHistory,
  Route
} from 'react-router-dom';

import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Tests HeroScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  }

  test('Should display correctly', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={HeroScreen}/>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h3').exists()).toBeTruthy();
    expect(wrapper.find('h3').text()).toBe('Spider Man');
  });

  test('Should call the Redirect component if have no arguments', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={history} />
      </MemoryRouter>
    );

    expect(wrapper.find('Redirect').exists()).toBe(true);
    expect(wrapper.find('Redirect').prop('to')).toBe('/');;
  });

  test('Should return Marvel screen back with push', () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={history} />}
      />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    expect(history.push).toHaveBeenCalled();
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(history.goBack).not.toHaveBeenCalled();
  });

  test('Should return DC screen back with push', () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={history} />}
      />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    expect(history.push).toHaveBeenCalled();
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith('/dc');
    expect(history.goBack).not.toHaveBeenCalled();
  });

  test('Should return screen back with goBack', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={history} />}
      />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    expect(history.goBack).toHaveBeenCalled();
    expect(history.goBack).toHaveBeenCalledTimes(1);
    expect(history.push).not.toHaveBeenCalled();
  });

  test('Should return Marvel screen back if not exists the hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/anything']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={history} />}
      />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');
    expect(history.push).not.toHaveBeenCalled();
    expect(history.goBack).not.toHaveBeenCalled();
  });
});

