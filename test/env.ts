import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.console.error = () => {};

Enzyme.configure({ adapter: new Adapter() });
