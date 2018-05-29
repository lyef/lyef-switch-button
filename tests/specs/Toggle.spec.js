import React from 'react';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { shallow, mount } from 'enzyme';
import Toggle from '../../src/Toggle';
chai.use(sinonChai);

describe('<Toggle />', () => {

    it('should have id defined', () => {
        const wrapper = shallow(<Toggle id="switch" />);
        expect(wrapper.props().id).to.be.defined;
    });

    it('should have toggle-container class when render', () => {
        const wrapper = shallow(<Toggle id="switch" />);
        expect(wrapper.find('.toggle-container')).to.have.length(1);
    });

    it('should start on if isChecked is passed', () => {
        const wrapper = mount(<Toggle id="switch" isChecked />);
        expect(wrapper.props().isChecked).to.equal(true);
    });

    it('should call changed function if checkbox is changed', () => {
        let changed = sinon.spy();
        const wrapper = mount(<Toggle id="switch" action={changed} />);
        wrapper.find('input').simulate('change');
        expect(changed).to.have.been.called;
    });
    it('should be disabled when disabled prop is set to true', () => {
        const wrapper = mount(<Toggle id="switch" disabled />);
        expect(wrapper.find('#switch').prop('disabled')).to.equal(true);
    });
});
