import React from "react";
import { mount, shallow, render } from "enzyme";
import Footer from "../../components/Footer";


describe("<Footer/>", function(){
    test('Render del Footer', () => {
        const footer = mount(<Footer/>);
        expect(footer.length).toEqual(1);
    })
})

describe("<Footer/> Snapshot", ()=>{
    test('snapshot test for Footer', () => {
        const footer = render(<Footer />);
        expect(footer).toMatchSnapshot();
      });
});