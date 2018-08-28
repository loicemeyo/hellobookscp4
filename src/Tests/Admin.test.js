import React from "react";
import { shallow } from "enzyme";
import moxios from "moxios"
import shallowToJson from "enzyme-to-json";
import AddBook from "../Components/AddBook";
import Admin from "../Components/Admin";
import AllUsers from "../Components/AllUsers";
import UpgradeUser from "../Components/UpgradeUser";
import OneBook from "../Components/OneBook";
import EditBook from "../Components/EditBook";

describe("Test Admin Component", () => {
    const wrapper = shallow(<Admin />);

    it("Admin component renders without crushing", () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();

    });

});
describe("Test AddBook Component", () => {
    const wrapper = shallow(<AddBook />);

    it("Addbook component renders without crushing", () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();

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
    let wrapper = shallow(<UpgradeUser />);

    it("UpgradeUser component renders without crushing", () => {
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

});

describe("Test EditBook Component", () => {
    const params = {
        params: {
            id: 1
        }
    };
    it("EditBook component renders without crushing", () => {
        let wrapper = shallow(<EditBook params = {{ params }}/>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();

    });

});