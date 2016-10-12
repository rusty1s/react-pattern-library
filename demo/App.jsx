import React, { Component } from 'react';

import Button, { PrimaryButton, DestructiveButton } from '../src/components/Button';
import Baseline from '../src/layout/Baseline';
import Grid from '../src/layout/Grid';
import Title, { SubTitle } from '../src/components/Title'

export default class App extends Component {
  render() {
    return (
      <Baseline>
        <Title>Hello, World!</Title>
        <SubTitle>Awesome subtitles</SubTitle>
        <Grid>
          <Button>Default</Button>
          <Button disabled={true}>Default disabled</Button>
          <PrimaryButton>Primary</PrimaryButton>
          <DestructiveButton>Destructive</DestructiveButton>
        </Grid>
        <Grid>
          <Button>Default</Button>
          <Button disabled={true}>Default disabled</Button>
          <PrimaryButton>Primary</PrimaryButton>
          <DestructiveButton>Destructive</DestructiveButton>
        </Grid>
      </Baseline>
    );
  }
}
