import React from "react";
import { shallow } from "enzyme";
import shallowToJson from "enzyme-to-json";
import Home from "../Components/Home";
import Root from "../Components/Root";
import Navigation from "../Components/Navigation";
import Error from "../Components/Error";
import Loginform from "../forms/login";
import Signupform from "../forms/signup";
import Footer from "../Components/Footer";
import Requestform from "../forms/requestreset";
import AllBooks from "../Components/AllBooks";
import ReactDOM from "react-dom";
import App from "../App";

xit("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Test Home Component", () => {
  const wrapper = shallow(<Home />);

  it("Home component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});

describe("Test Root Component", () => {
  const wrapper = shallow(<Root />);

  it("Root component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
describe("Test Navigation Component", () => {
  const wrapper = shallow(<Navigation />);

  it("Navigation component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
describe("Test Login Component", () => {
  const wrapper = shallow(<Loginform />);

  it("Login component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
describe("Test Signup Component", () => {
  const wrapper = shallow(<Signupform />);

  it("Signup component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
// describe("Test AllBooks Component", () => {

//   const wrapper = shallow(<AllBooks />);

//   it("Login component renders without crushing", () => {
//     expect(shallowToJson(wrapper)).toMatchSnapshot();

//   });

// });
describe("Test Footer Component", () => {
  const wrapper = shallow(<Footer />);

  it("Footer component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
describe("Test Requestform Component", () => {
  const wrapper = shallow(<Requestform />);

  it("Request password component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
describe("Test Error Component", () => {
  const wrapper = shallow(<Error />);

  it("Error component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});