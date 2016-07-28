import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import SwitchButton from '../../src/Main';
import LabelLeft from '../../src/LabelLeft';
import LabelRight from '../../src/LabelRight';

describe('<SwitchButton />', () => {

    it('should have switch-button when creates the component', () => {
        const wrapper = shallow(<SwitchButton id="switch" />);
        expect(wrapper.find('.switch-button')).to.have.length(1);
    });

    it('should have id props defined', () => {
        const wrapper = shallow(<SwitchButton id="switch" />);
        expect(wrapper.props().id).to.be.defined;
    });

    describe('#LabelLeft', () => {

        it('should have LabelLeft component when passes labelLeft props', () => {
            const wrapper = mount(<SwitchButton id="switch" labelLeft="left" />);
            expect(wrapper.find(LabelLeft)).to.have.length(1);
        });

        it('should not have LabelLeft component when not passes labelLeft props', () => {
            const wrapper = mount(<SwitchButton id="switch" />);
            expect(wrapper.find(LabelLeft)).to.have.length(0);
        });
    });

    describe('#LabelRight', () => {

        it('should have LabelRight component when passes labelRight props', () => {
            const wrapper = mount(<SwitchButton id="switch" labelRight="right" />);
            expect(wrapper.find(LabelRight)).to.have.length(1);
        });

        it('should not have LabelRight component when not passes labelRight props', () => {
            const wrapper = mount(<SwitchButton id="switch" />);
            expect(wrapper.find(LabelRight)).to.have.length(0);
        });
    });
});
