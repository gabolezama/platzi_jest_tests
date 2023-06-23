import React from "react";
import { mount, render, shallow } from "enzyme";
import { ProviderMock } from "../../__mocks__/ProviderMock";
import Header from "../../components/Header";

describe("<Header/>", function(){
    test('Render del Header', () => {
        const header = shallow(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    })

    test('Render del titulo', () => {
        const header = mount(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.find(".Header-title").text()).toEqual("Platzi Store");
    })
})

describe("<Header/> Snapshot", function(){
    test('Probar el snapshot de Header', () => {
        const header = render(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header).toMatchSnapshot();
    })
})