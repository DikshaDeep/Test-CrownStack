import React, { ReactChild, Component } from 'react'
import {Provider} from "react-redux";
import { createStore } from 'redux';

import { mount} from '../../../config/Enzyme';
import TodoList from '../index'

import {rootReducer} from '../../reducer/index';

const init = function initialize(state: any) {
  return createStore(rootReducer, state);
};

describe('TodoList Component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={init({
        list: {
          error: false,
          list: ["First"]
        }
      })}>
        <TodoList />
      </Provider>,
    );
  })
  it('renders correctly', () => {
    expect(wrapper.find('#test-home').length).toEqual(2);
  });
  
})
