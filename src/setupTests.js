import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   clear: jest.fn()
// };
// global.localStorage = localStorageMock;
const localStorageMock = (function() {
  let store = {};

  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

global.localStorage = localStorageMock;
