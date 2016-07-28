import React from 'react';
import SwitchButton from '../src/Main'; // This is our component
import { storiesOf } from '@kadira/storybook';

storiesOf('SwitchButton', module)
    .add('simple switch button', () => (
        <SwitchButton />
    ))
    .add('with right label', () => (
        <SwitchButton />
    ))
    .add('with left label', () => (
        <SwitchButton />
    ))
    .add('start turn on', () => (
        <SwitchButton />
    ))
    .add('logs when turned on', () => (
        <SwitchButton />
    ))
    .add('logs when turned off', () => (
        <SwitchButton />
    ))
    .add('logs everytime', () => (
        <SwitchButton />
    ))
