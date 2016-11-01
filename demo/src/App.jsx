import React from 'react';

import '../../src';

import Button from '../../src/atoms/Button';
import Title, { SubTitle } from '../../src/atoms/Title';
import List from '../../src/atoms/List';
import Paragraph from '../../src/atoms/Paragraph';

import Baseline from '../../src/molecules/Baseline';
import Grid from '../../src/molecules/Grid';
import Modal from '../../src/molecules/Modal';

const App = () => (
  <Baseline>
    <Title>Hello, World!</Title>
    <SubTitle>Hello again!</SubTitle>
    <Grid>
      <Button>wadawd</Button>
      <Button disabled>wadawd</Button>
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
      Ein Text!
    </Paragraph>
    <Modal title={"LOLOLOL"}>
      <Paragraph>Basic text</Paragraph>
    </Modal>
  </Baseline>
);

export default App;
