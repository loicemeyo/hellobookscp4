import React from "react";
import { shallow, mount } from "enzyme";
import moxios from "moxios";
import sinon from "sinon";
import shallowToJson from "enzyme-to-json";
import Requestform from "../forms/requestreset";
import Resetform from "../forms/resetpassword";
import OneBook from "../Components/OneBook";
import AllBooks from "../Components/AllBooks";
import BorrowHistory from "../Components/BorrowingHistory";

describe("Test Requestform Component", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  
  it("Request password component renders without crushing", () => {
    let wrapper = shallow(<Requestform />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });
  it("Calls handleSubmit() on Requestform submission", () => {
    let wrapper = shallow(<Requestform />);
    let handleSubmit = sinon.spy();
    wrapper = mount(<Requestform onSubmit={handleSubmit} />);
    wrapper.find("form").simulate("submit");

    moxios.wait(() => { });
  });
  it("Calls handleChange() on email input field", () => {
    let wrapper = shallow(<Requestform />);
    let handleChange = sinon.spy();
    wrapper = mount(<Requestform onChange={handleChange} />);
    wrapper.find("#email").simulate("change");
  });

});

describe("Test Resetform Component", () => {
  const params = {
    params: {
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MzUwOTg0NDksIm5iZiI6MTUzNTA5ODQ0OSwianRpIjoiNzU3YWI2ZGEtYTg4ZS00YjNlLWFkMmUtMjA5YWI5NDUxZjI5IiwiZXhwIjoxNTM1MTAyMDQ5LCJpZGVudGl0eSI6ImdyYWNlQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.PApURCdj17-3LZT4MzJrBpug6klFHpI4zJDU3Q0ahM0",
      email: "loicemeyo@gmail.com"
    }
  }


  it("Resetform component renders without crushing", () => {
    let wrapper = shallow(<Resetform params={{ params }} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
describe("Test AllBooks Component", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Allbooks component renders without crushing", () => {
    let wrapper = shallow(<AllBooks />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});
describe("Test OneBook Component", () => {

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


  it("OneBook component renders without crushing", () => {
    let wrapper = shallow(<OneBook params={{ params }} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });
  
 
  it("Calls handleBorrow() on Onebook Borrow function", () => {
    let handleBorrow = sinon.spy();
    let wrapper = mount(<OneBook onClick={handleBorrow} params={{ params }} />);
    wrapper.find("#borrow").simulate("click");

    moxios.wait(() => { });
  });

});

describe("Test BorrowHistory Component", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("BorrowHistory component renders without crushing", () => {
    let wrapper = shallow(<BorrowHistory />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });

});