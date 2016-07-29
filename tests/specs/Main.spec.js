import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import SwitchButton from '../../src/Main';
import Label from '../../src/Label';

describe('<SwitchButton />', () => {

    it('should have switch-button when creates the component', () => {
        const wrapper = shallow(<SwitchButton id="switch" />);
        expect(wrapper.find('.switch-button')).to.have.length(1);
    });

    describe('#Label', () => {

        it('should not have Label component when not passes label props', () => {
            const wrapper = mount(<SwitchButton id="switch" />);
            expect(wrapper.find(Label)).to.have.length(0);
        });

        it('should have Label component when passes label props', () => {
            const wrapper = mount(<SwitchButton id="switch" labelLeft="left" />);
            expect(wrapper.find(Label)).to.have.length(1);
        });

        it('should have 2 label elements when pass labelLeft and labelRight props', () => {
            const wrapper = mount(<SwitchButton id="switch" labelLeft="left" labelRight="right" />);
            expect(wrapper.find('.label')).to.have.length(2);
        });
    });
});
