import React from 'react'
import {Provider} from "react-redux";
import { createStore } from 'redux';
import createWaitForElement from '../../container/test/enzyme-wait.d.ts';

import { mount} from '../../../config/Enzyme';
import InputBox, {IProps} from '../InputBox';

import {rootReducer} from '../../reducer/index';
import { ReactWrapper } from 'enzyme';

const props: IProps = {
  value: "",
  type: "text",
  placeholder: "Enter to your list",
  onChange: jest.fn()
}
const init = function initialize(state: any) {
  return createStore(rootReducer, state);
};

export async function fill(component: ReactWrapper, selector: string, value: string, index: number) {
  const find = createWaitForElement(selector);
  await find(component);
  const input = component.find(selector).at(index||0);
  input.simulate('change', { target: { value } });
}

describe('InputBox Component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={init({
        list: {
          error: false,
          list: ["First"]
        }
      })}>
        <InputBox {...props}/>
      </Provider>,
    );
  })

  it('should fill the input when change', (done) => {
    fill(wrapper, "#input-list", "abc", 0).then(() => {
      wrapper.update();
      // console.log('wrapper////', wrapper.find("#input-list").props())
      done();
    });
    
  });
})
