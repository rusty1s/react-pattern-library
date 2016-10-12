import React, { Component } from 'react';

import Button, { PrimaryButton, DestructiveButton } from '../src/components/Button';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button>Default</Button>
        <Button disabled={true}>Default disabled</Button>
        <PrimaryButton>Primary</PrimaryButton>
        <DestructiveButton>Destructive</DestructiveButton>
      </div>
    );
  }
}
