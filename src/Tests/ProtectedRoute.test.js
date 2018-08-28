import React from "react";
import { shallow } from "enzyme";
import shallowToJson from "enzyme-to-json";
import ProtectedRoute from "../Components/ProtectedRoute";

describe("Test ProtectedRoute Component", () => {
    const wrapper = shallow(<ProtectedRoute />);

    it("ProtectedRoute component renders without crushing", () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();

    });

});