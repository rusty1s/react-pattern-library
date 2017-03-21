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
  SuccessNotification,
  InfoNotification,
  WarningNotification,
  DangerNotification,
  Dropdown,
  Nav,
  NavSection,
  NavSearch,
  NavButton,
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

  onDropdownInput = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <Baseline>
        <Nav>
          <NavSection center >
            <NavSearch />
          </NavSection>
          <NavSection right >
            <NavButton text="Right" />
          </NavSection>
          <NavSection >
            <NavButton text="Left" />
          </NavSection>
        </Nav>
        <Box>
          <Title text="Hello, World" />
          <SubTitle text="Hello, World" />
          <Grid>
            <Button className="wdawd" text="LOLOL" onClick={this.onClick} />
            <Button text="LOLOL" disabled onClick={this.onClick} />
            <Button text="LOLOL" onClick={this.onClick} />
          </Grid>
          <Paragraph>Basic Text Example</Paragraph>
          <Grid>
            <TextInput
              id="0"
              onInput={this.onInput}
              onChange={() => 'CHANGE'}
              onEnter={() => 'SUBMIT'}
              value={this.state.value}
            />
            <TextInput id="1" placeholder={'lolol'} onInput={this.onInput} value={this.state.value} required />
            <TextInput id="2" readOnly onInput={this.onInput} value={this.state.value} />
            <TextInput id="3" required onInput={this.onInput} value={this.state.value} />
            <PasswordInput id="4" onInput={this.onInput} value={this.state.value} />
            <IntegerInput id="5" onInput={this.onIntegerInput} value={this.state.intValue} max={5} />
            <Dropdown id="6" onInput={this.onDropdownInput} value={this.state.value} >
              <option>&nbsp;</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </Dropdown>
            <Dropdown id="7" readOnly onInput={this.onDropdownInput} value={this.state.value} >
              <option>&nbsp;</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </Dropdown>
          </Grid>
          <FormField name="Label" >
            <TextInput id="wadaw" onInput={this.onInput} value={this.state.value} />
          </FormField>
        </Box>
        <SuccessNotification>
          wadawdwda uwdhawui dhuawi dauwid awuid awd hawuidh awiud awuid auwid
        </SuccessNotification>
        <InfoNotification>
          wadawdwda uwdhawui dhuawi dauwid awuid awd hawuidh awiud awuid auwid
        </InfoNotification>
        <WarningNotification>
          wadawdwda uwdhawui dhuawi dauwid awuid awd hawuidh awiud awuid auwid
        </WarningNotification>
        <DangerNotification>
          wadawdwda uwdhawui dhuawi dauwid awuid awd hawuidh awiud awuid auwid
        </DangerNotification>
      </Baseline>
    );
  }
}

export default App;
