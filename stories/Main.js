import React from 'react';
import SwitchButton from '../src/Main'; // This is our component
import { storiesOf } from '@kadira/storybook';

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
        <SwitchButton id="switch" />
    ))
    .add('logs when turned on', () => (
        <SwitchButton id="switch" />
    ))
    .add('logs when turned off', () => (
        <SwitchButton id="switch" />
    ))
    .add('logs everytime', () => (
        <SwitchButton id="switch" />
    ))
