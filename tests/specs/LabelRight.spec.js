import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import LabelRight from '../../src/LabelRight';

describe('<LabelRight />', () => {

    it('should have name and id defined', () => {
        const wrapper = shallow(<LabelRight id="switch" name="right" />);
        expect(wrapper.props().id).to.be.defined;
        expect(wrapper.props().name).to.be.defined;
    });

    it('should have label-right class when render', () => {
        const wrapper = shallow(<LabelRight id="switch" name="right" />);
        expect(wrapper.find('.label-right')).to.have.length(1);
    });
});
