import React, { Component } from 'react';

import {
  Baseline,
  Box,
  Grid,
  Title,
  SubTitle,
  Button,
  Paragraph,
  TextInput,
  PasswordInput,
  // IntegerInput,
} from '../src';

class App extends Component {
  state = {
    value: 'wdawd',
  }

  onInput = (value) => {
    this.setState({ value });
  }

  onClick = () => 'Clicked!';

  render() {
    return (
      <Baseline>
        <Box>
          <Title text="Hello, World" />
          <SubTitle text="Hello, World" />
          <Grid>
            <Button text="LOLOL" onClick={this.onClick} />
            <Button text="LOLOL" disabled onClick={this.onClick} />
            <Button text="LOLOL" onClick={this.onClick} />
          </Grid>
          <Paragraph>Basic Text Example</Paragraph>
          <Grid>
            <TextInput
              onInput={this.onInput}
              onChange={() => console.log('CHANGE')}
              onSubmit={() => console.log('SUBMIT')}
              value={this.state.value}
            />
            <TextInput onInput={this.onInput} value={this.state.value} />
            <TextInput onInput={this.onInput} value={this.state.value} />
            <TextInput onInput={this.onInput} value={this.state.value} />
            <PasswordInput onInput={this.onInput} value={this.state.value} />
          </Grid>
        </Box>
      </Baseline>
    );
  }
}

export default App;
