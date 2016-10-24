import React, { Component } from 'react';

// import Button, { PrimaryButton, DestructiveButton } from '../../src/atoms/Button';
import Title, { SubTitle } from '../../src/atoms/Title'

import Baseline from '../../src/molecules/Baseline';
import Grid from '../../src/molecules/Grid';

export default class App extends Component {
  render() {
    return (
      <Baseline>
        <Title>Hello, World!</Title>
        <SubTitle>Hello again!</SubTitle>
        <Grid>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </Grid>
      </Baseline>
    );
  }
}

/*

      <Baseline>
          <Button>Default</Button>
          <Button disabled={true}>Default disabled</Button>
          <PrimaryButton>Primary</PrimaryButton>
          <DestructiveButton>Destructive</DestructiveButton>
          <Button>Default</Button>
          <Button disabled={true}>Default disabled</Button>
          <PrimaryButton>Primary</PrimaryButton>
          <DestructiveButton>Destructive</DestructiveButton>
        <SubTitle>Awesome subtitles</SubTitle>
        <Grid>
        </Grid>
      </Baseline>
          */
