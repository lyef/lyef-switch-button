import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Toggle from '../../src/Toggle';

describe('<Toggle />', () => {

    it('should have id defined', () => {
        const wrapper = shallow(<Toggle id="switch" />);
        expect(wrapper.props().id).to.be.defined;
    });

    it('should have toggle-container class when render', () => {
        const wrapper = shallow(<Toggle id="switch" />);
        expect(wrapper.find('.toggle-container')).to.have.length(1);
    });
});
