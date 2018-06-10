import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

Enzyme.configure({ adapter: new Adapter() });
