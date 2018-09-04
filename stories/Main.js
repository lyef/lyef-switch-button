import React from 'react';
import SwitchButton from './SwitchButtonContainer'; // This is our component
import Label from '../src/Label'; // This is our component
import { storiesOf, action } from '@storybook/react';

storiesOf('SwitchButton', module)
    .add('simple switch button', () => (
        <SwitchButton id="switch" />
    ))
    .add('with right label', () => (
        <SwitchButton id="switch" labelRight="right" />
    ))
    .add('with left label', () => (
        <SwitchButton id="switch" labelLeft="left" />
    ))
    .add('with both labels', () => (
        <SwitchButton id="switch" labelRight="right" labelLeft="left" />
    ))
    .add('start turn on', () => (
        <SwitchButton id="switch" isChecked />
    ))
    .add('disabled', () => (
        <SwitchButton id="switch" disabled labelLeft="left" labelRight="right" />
    ))

    .add('logs when change', () => (
        <SwitchButton id="switch" action={action('changed!')} />
    ))
    .add('render object as label', () => (
        <SwitchButton
            id="switch"
            labelRight={<input type="password" placeholder="Enter password" />}
            labelLeft={<Label id="element" name="Left label in React element" />}
        />
    ));
