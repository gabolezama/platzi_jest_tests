import React from "react";
import { mount, shallow } from "enzyme";
import Footer from "../../components/Footer";
import { ProviderMock } from "../../__mocks__/ProviderMock";


describe("<Footer/>", function(){
    test('Render del Footer', () => {
        const footer = mount(<Footer/>);
        expect(footer.length).toEqual(1);
    })
})