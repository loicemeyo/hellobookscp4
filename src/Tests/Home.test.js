import React from "react";
import { shallow, mount } from "enzyme";
import shallowToJson, { mountToJson } from "enzyme-to-json";
import Home from "../Components/Home";
import Root from "../Components/Root";
import Navigation from "../Components/Navigation";
import Error from "../Components/Error";
import Loginform from "../forms/login";
import Signupform from "../forms/signup";
import Footer from "../Components/Footer";
import Requestform from "../forms/requestreset";
import ReactDOM from "react-dom";
import App from "../App";
import moxios from "moxios";
import sinon from "sinon";


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
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it("Login component renders without crushing", () => {
    let wrapper = shallow(<Loginform />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });
  it("Calls handleSubmit() on loginform submission", () => {
    let wrapper = shallow(<Loginform />);
    let handleSubmit = sinon.spy();
    wrapper = mount(<Loginform onSubmit={handleSubmit} />);
    wrapper.find("form").simulate("submit");

    moxios.wait(() => { });
  });
  it("Calls handleChange() on inputting email field", () => {
    let wrapper = shallow(<Loginform />);
    let handleChange = sinon.spy();
    wrapper = mount(<Loginform onChange={handleChange} />);
    wrapper.find("#email").simulate("change");
  });
  it("Calls handleChange() on inputting password field", () => {
    let wrapper = shallow(<Loginform />);
    let handleChange = sinon.spy();
    wrapper=mount(<Loginform onChange={handleChange} />);
    wrapper.find("#password").simulate("change");
  });

});
describe("Test Signup Component", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Signup component renders without crushing", () => {
    let wrapper = shallow(<Signupform />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });
  it("Calls handleSubmit() on signup form submission", () => {
    let wrapper = shallow(<Signupform />);
    let handleSubmit = sinon.spy();
    wrapper = mount(<Signupform onSubmit={handleSubmit} />);
    wrapper.find("form").simulate("submit");

    moxios.wait(() => { });

  });
  it("Calls handleChange() on inputting username field", () => {
    let wrapper = shallow(<Signupform />);
    let handleChange = sinon.spy();
    wrapper = mount(<Signupform onChange={handleChange} />);
    wrapper.find("#username").simulate("change");

  });
  it("Calls handleChange() on inputting email field", () => {
    let wrapper = shallow(<Signupform />);
    let handleChange = sinon.spy();
    wrapper = mount(<Signupform onChange={handleChange} />);
    wrapper.find("#email").simulate("change");

  });
  it("Calls handleChange() on inputting password field", () => {
    let wrapper = shallow(<Signupform />);
    let handleChange = sinon.spy();
    wrapper = mount(<Signupform onChange={handleChange} />);
    wrapper.find("#password").simulate("change");

  });
  it("Calls handleChange() on inputting confirm password field", () =>{
    let wrapper = shallow(<Signupform />);
    let handleChange = sinon.spy();
    wrapper = mount(<Signupform onChange={handleChange} />) ;
    wrapper.find("#passwordb").simulate("change");
  });


});
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