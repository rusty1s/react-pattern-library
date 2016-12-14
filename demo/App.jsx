import React, { Component } from 'react';

import {
  Baseline,
  Title,
  SubTitle,
  Button,
  Grid,
  Input,
} from '../src';

class App extends Component {
  state = {
    value: 'Hello, World!',
  }

  onInput(value) {
    this.setState({ value });
  }

  render() {
    return (
      <Baseline>
        <Title text="Hello, World" />
        <SubTitle text="Hello, World" />
        <Grid>
          <Button text="wadawda" />
          <Button text="wadawda" />
          <Button text="wadawda" />
          <Button text="wadawda" />
          <Button text="wadawda" />
          <Button text="wadawda" />
          <Button text="wadawda" />
          <Button text="wadawda" />
          <Button text="wadawda" />
          <Button text="wadawda" />
          <Button text="wadawda" />
          <Button text="wadawda" disabled />
        </Grid>
        <Input
          value={this.state.value}
          maxLength={20}
          onInput={::this.onInput}
        />
      </Baseline>
    );
  }
}

export default App;
