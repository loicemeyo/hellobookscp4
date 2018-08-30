import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import moxios from "moxios"
import shallowToJson, { mountToJson } from "enzyme-to-json";
import AddBook from "../Components/AddBook";
import Admin from "../Components/Admin";
import AllUsers from "../Components/AllUsers";
import UpgradeUser from "../Components/UpgradeUser";
import EditBook from "../Components/EditBook";

describe("Test Admin Component", () => {
  const wrapper = shallow(<Admin />);

  it("Admin component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
describe("Test AddBook Component", () => {
  beforeEach(() => {
    moxios.install();
  });
    
  afterEach(() => {
    moxios.uninstall();
  });
    
  it("Addbook component renders without crushing", () => {
    let wrapper = shallow(<AddBook />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });
  it("Calls handleSubmit() on AddBook form submission", () => {
    let wrapper = shallow(<AddBook />);
    let handleSubmit = sinon.spy();
    wrapper = mount(<AddBook onSubmit={handleSubmit} />);
    wrapper.find("form").simulate("submit");

    moxios.wait(() => { });
  });
  it("Calls handleChange() on book title input field", () => {
    let wrapper = shallow(<AddBook />);
    let handleChange = sinon.spy();
    wrapper = mount(<AddBook onChange={handleChange} />);
    wrapper.find("#title").simulate("change");
  })
});
describe("Test AllUsers Component", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
    
  it("AllUsers component renders without crushing", () => {
    const wrapper = shallow(<AllUsers />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
describe("Test UpgradeUser Component", () => {
  let wrapper = shallow(<UpgradeUser />);

  it("UpgradeUser component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
describe("Test EditBook Component", () => {
  beforeEach(() => {
    moxios.install();
  });
    
  afterEach(() => {
    moxios.uninstall();
  });
  const params = {
    params: {
      id: 1
    }
  };
  it("EditBook component renders without crushing", () => {
    let wrapper = shallow(<EditBook params = {{ params }}/>);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });
  //   it("Calls handleSubmit() on EditBook form submission", () => {
  //     let wrapper = shallow(<EditBook params = {{params}}/>);
  //     let handleSubmit = sinon.spy();
  //     wrapper = mount(<EditBook onSubmit={handleSubmit} />);
  //     wrapper.find("form").simulate("submit");

  //     moxios.wait(() => { });


  //   });

});