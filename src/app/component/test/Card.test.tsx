import React from 'react'
import {shallow} from '../../../config/Enzyme';
import List, { IProps } from '../Card';

describe('TodoList Component', () => {
  const props: IProps = {
    seq: 1,
    name: "num",
    handleDelete: jest.fn()
  }

  it('renders correctly', () => {
    const component = shallow(<List {...props} />)
      expect(component).toMatchSnapshot()
  })
})
