import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import LabelLeft from '../../src/LabelLeft';

describe('<LabelLeft />', () => {

    it('should have name and id defined', () => {
        const wrapper = shallow(<LabelLeft id="switch" name="left" />);
        expect(wrapper.props().id).to.be.defined;
        expect(wrapper.props().name).to.be.defined;
    });

    it('should have label-left class when render', () => {
        const wrapper = shallow(<LabelLeft id="switch" name="left" />);
        expect(wrapper.find('.label-left')).to.have.length(1);
    });
});
