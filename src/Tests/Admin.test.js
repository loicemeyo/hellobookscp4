import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import moxios from "moxios";
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
  });
  it("Calls handleChange() on book author input field", () => {
    let wrapper = shallow(<AddBook />);
    let handleChange = sinon.spy();
    wrapper = mount(<AddBook onChange={handleChange} />);
    wrapper.find("#author").simulate("change");
  });
  it("Calls handleChange() on publication year input field", () => {
    let wrapper = shallow(<AddBook />);
    let handleChange = sinon.spy();
    wrapper = mount(<AddBook onChange={handleChange} />);
    wrapper.find("#year").simulate("change");
  });
  it("Calls handleChange() on book serial input field", () => {
    let wrapper = shallow(<AddBook />);
    let handleChange = sinon.spy();
    wrapper = mount(<AddBook onChange={handleChange} />);
    wrapper.find("#serial").simulate("change");
  });
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
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  let wrapper = shallow(<UpgradeUser />);

  it("UpgradeUser component renders without crushing", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });
  it("Calls handleSubmit() on UpgradeUser form submission", () => {
    let wrapper = shallow(<UpgradeUser />);
    let handleSubmit = sinon.spy();
    wrapper = mount(<UpgradeUser onSubmit={handleSubmit} />);
    wrapper.find("form").simulate("submit");

    moxios.wait(() => { });
  });
  it("Calls handleChange() on email input field", () => {
    let wrapper = shallow(<UpgradeUser />);
    let handleChange = sinon.spy();
    wrapper = mount(<UpgradeUser onChange={handleChange} />);
    wrapper.find("#email").simulate("change");
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
    let wrapper = shallow(<EditBook params={{ params }} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

  it("Calls handleSubmit() on EditBook form submission", () => {
    let handleSubmit = sinon.spy();
    let wrapper = mount(<EditBook onSubmit={handleSubmit} params={{ params }} />);
    wrapper.find("form").simulate("submit");

    moxios.wait(() => { });


  });
  it("Calls handleChange() on EditBook book title", () => {
    let handleChange = sinon.spy();
    let wrapper = mount(<EditBook onSubmit={handleChange} params={{ params }} />);
    wrapper.find("#title").simulate("change");
  });
  it("Calls handleChange() on EditBook book author", () => {
    let handleChange = sinon.spy();
    let wrapper = mount(<EditBook onSubmit={handleChange} params={{ params }} />);
    wrapper.find("#author").simulate("change");
  });
  it("Calls handleChange() on EditBook book year", () => {
    let handleChange = sinon.spy();
    let wrapper = mount(<EditBook onSubmit={handleChange} params={{ params }} />);
    wrapper.find("#year").simulate("change");
  });
  it("Calls handleChange() on EditBook book serial", () => {
    let handleChange = sinon.spy();
    let wrapper = mount(<EditBook onSubmit={handleChange} params={{ params }} />);
    wrapper.find("#serial").simulate("change");
  });

});