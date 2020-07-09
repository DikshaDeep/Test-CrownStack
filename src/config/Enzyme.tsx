import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { ReactChild } from 'react';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

export { shallow, mount, render };
export default Enzyme;

