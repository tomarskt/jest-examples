import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// to supress all warnings, uncomment below line;
// no need to install jsdom or setup jsom, as it's part of jest and 
// jest default to jsdom in testEnvironmenet settins. see package.json jest section
// process.env.NODE_ENV = 'production' 


Enzyme.configure({ adapter: new Adapter() });

