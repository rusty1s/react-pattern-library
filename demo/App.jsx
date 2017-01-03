import React, { Component } from 'react';

import {
  Baseline,
  Box,
  Grid,
  Title,
  SubTitle,
  Button,
  // Input,
  // PasswordInput,
  // IntegerInput,
} from '../src';

class App extends Component {
  state = {
    value: '',
    intValue: '10',
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
      <div>
        <Baseline>
          <Box>
            <Title text="Hello, World" />
            <SubTitle text="Hello, World" />
            <Grid>
              <Button text="LOLOL" onClick={this.onClick} />
              <Button text="LOLOL" disabled onClick={this.onClick} />
              <Button text="LOLOL" onClick={this.onClick} />
            </Grid>
          </Box>
        </Baseline>
        <Baseline>
          <Box>
            <p>wadawd</p>
          </Box>
        </Baseline>
      </div>
    );
  }
}

export default App;
