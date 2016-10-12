import React, { Component } from 'react';

import { Button } from '../src';

console.log(Button);
export default class App extends Component {
  render() {
    return (
      <div>
        <Button><a href="https://www.google.de">go to google</a></Button>
      </div>
    );
  }
}
