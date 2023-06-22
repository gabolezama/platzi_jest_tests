import React from "react";
import { mount, shallow } from "enzyme";
import { ProviderMock } from "../__mocks__/ProviderMock";
import Product from "../components/Product";
import { ProductMock } from "../__mocks__/ProductMock";

describe("<Product/>", () => {

    test("Render del Componente Product", () => {
        const product = shallow(
            <ProviderMock>
                <Product/>
            </ProviderMock>
        )
        expect(product.length).toEqual(1);
    });

    test("Comprobar boton comprar", () => {
        const handleAddToCart = jest.fn();

        const wrapper = mount(
            <ProviderMock>
                <Product
                    product={ProductMock}
                    handleAddToCart={handleAddToCart}
                />
            </ProviderMock>
        );

        wrapper.find('#myButton').simulate('click');
        expect(handleAddToCart).toBeCalledTimes(1);
    });
})