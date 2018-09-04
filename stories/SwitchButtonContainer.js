import React, { Component } from 'react';
import SwitchButton from '../src/Main';

class SwitchButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: props.isChecked };
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction() {
    this.props.action();
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }));
  }

  render() {
    return (
      <SwitchButton
        {...this.props}
        action={this.handleAction}
        isChecked={this.state.isChecked}
      />
    );
  }
}

SwitchButtonContainer.defaultProps = {
  isChecked: false,
  action: () => {},
};

export default SwitchButtonContainer;
