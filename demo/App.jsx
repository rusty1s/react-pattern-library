import React, { Component } from 'react';

import {
  Baseline,
  Title,
  SubTitle,
  Button,
  Grid,
  Input,
  PasswordInput,
  IntegerInput,
} from '../src';

class App extends Component {
  state = {
    value: '',
    intValue: '10',
  }

  onInput(value) {
    this.setState({ value });
  }

  onIntegerInput(intValue) {
    this.setState({ intValue });
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
          placeholder={'Username'}
          maxLength={20}
          onInput={::this.onInput}
        />
        <PasswordInput
          value={this.state.value}
          placeholder={'Password'}
          onInput={::this.onInput}
        />
        <IntegerInput
          value={this.state.intValue}
          placeholder={'Integer'}
          onInput={::this.onIntegerInput}
          min={0}
        />
      </Baseline>
    );
  }
}

export default App;
