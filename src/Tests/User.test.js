import React from "react";
import { shallow } from "enzyme";
import moxios from "moxios"
import shallowToJson from "enzyme-to-json";
import Resetform from "../forms/resetpassword";
import { getMaxListeners } from "cluster";

describe("Test Resetform Component", () => {
    const params = {
        params: {
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MzUwOTg0NDksIm5iZiI6MTUzNTA5ODQ0OSwianRpIjoiNzU3YWI2ZGEtYTg4ZS00YjNlLWFkMmUtMjA5YWI5NDUxZjI5IiwiZXhwIjoxNTM1MTAyMDQ5LCJpZGVudGl0eSI6ImdyYWNlQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.PApURCdj17-3LZT4MzJrBpug6klFHpI4zJDU3Q0ahM0",
            email: "loicemeyo@gmail.com"
        }
    }
    

    it("Resetform component renders without crushing", () => {
        let wrapper = shallow(<Resetform params = {{params}} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();

    });

});