import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Label from '../../src/Label';

describe('<Label />', () => {

    it('should have name and id defined', () => {
        const wrapper = shallow(<Label id="switch" name="left" />);
        expect(wrapper.props().id).to.be.defined;
        expect(wrapper.props().name).to.be.defined;
    });

    it('should have label element when render', () => {
        const wrapper = mount(<Label id="switch" name="left" />);
        expect(wrapper.find('label')).to.have.length(1);
    });
});
