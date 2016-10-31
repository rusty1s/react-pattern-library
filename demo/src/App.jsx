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
          <span>wadawd
            <List>
              <span>awdawd</span>
              <span>wadawd</span>
            </List>
          </span>
          <span>awdawd</span>
        </List>
        <Paragraph>
          Dies ist ein wirklicher sehr langer Text mit sehr langen Wörtern wie Schifffahrtsgesellschaft. Bin mal gespannt, ob er das richtig trennen kann! Eine weitere Möglichkeit, dies zu testen, ist, einen weiteren Satz zu schreiben. Es scheint so, dass das nicht im Chrome funktioniert. Todtraurig!
        </Paragraph>
      </Baseline>
    );
  }
}
