import React from 'react'

import {shallow, render} from '../../../config/Enzyme';
import Button, {IProps} from '../Button';

const props: IProps = {
  children: "Submit",
  onClick: jest.fn()
}
const mockFun = jest.fn();


describe('Button Component', () => {
  it('should check the component exist with children prop', () => {
    const buttonWrapper = shallow(
      <Button {...props} />
    );
    expect(buttonWrapper.find('#button-test').props().children).toBe("Submit");
  });

  it('should call mock function when button is clicked', () => {
    const buttonWrapper = shallow(
      <Button {...props} />
    );
    console.log('buttonWrapper.simulate', buttonWrapper.simulate('click').length);
    
    expect(mockFun).toHaveBeenCalledTimes(1);
  });
  
})
