import React, { Component } from 'react';

import '../../src';

import Button from '../../src/atoms/Button';
import Title, { SubTitle } from '../../src/atoms/Title'
import List from '../../src/atoms/List';
import Paragraph from '../../src/atoms/Paragraph'

import Baseline from '../../src/molecules/Baseline';
import Grid from '../../src/molecules/Grid';

export default class App extends Component {
  render() {
    return (
      <Baseline>
        <Title>Hello, World!</Title>
        <SubTitle>Hello again!</SubTitle>
        <Grid>
          <Button>wadawd</Button>
          <Button disabled={true}>wadawd</Button>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </Grid>
        <List>
          <span>awdawd</span>
          <span>wadawd</span>
          <SubTitle>wdawd</SubTitle>
          <Button>wadawd</Button>
        </List>
        <Paragraph>
          Dies ist ein wirklicher sehr langer Text mit sehr langen Wörtern wie Schifffahrtsgesellschaft. Bin mal gespannt, ob er das richtig trennen kann! Eine weitere Möglichkeits, dies zu testen, ist, einen weiteren Satz zu schreiben.
        </Paragraph>
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
