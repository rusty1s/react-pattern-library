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
  IntegerInput,
  FormField,
} from '../src';

class App extends Component {
  state = {
    value: 'wdawd',
    intValue: '0',
  }

  onInput = (value) => {
    this.setState({ value });
  }

  onIntegerInput = (intValue) => {
    this.setState({ intValue });
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
              id="0"
              onInput={this.onInput}
              onChange={() => console.log('CHANGE')}
              onEnter={() => console.log('SUBMIT')}
              value={this.state.value}
            />
            <TextInput id="1" placeholder={'lolol'} onInput={this.onInput} value={this.state.value} />
            <TextInput id="2"readOnly onInput={this.onInput} value={this.state.value} />
            <TextInput id="3" onInput={this.onInput} value={this.state.value} />
            <PasswordInput id="4" onInput={this.onInput} value={this.state.value} />
            <IntegerInput id="5" onInput={this.onIntegerInput} value={this.state.intValue} max={5} />
          </Grid>
          <FormField name="Label">
            <TextInput id="wadaw" onInput={this.onInput} value={this.state.value} />
          </FormField>
        </Box>
      </Baseline>
    );
  }
}

export default App;
