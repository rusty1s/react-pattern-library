import React, { Component } from 'react';

import Button from '../../../components/Button';
import Popup from '../../../components/Popup';

export default class AddMandantView extends Component {
  constructor(props) {
    super(props);

    this.state = { popupIsOpen: false };

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  openPopup() {
    this.setState({ popupIsOpen: true });
  }

  closePopup() {
    this.setState({ popupIsOpen: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.openPopup}>Add</Button>

        <Popup isOpen={this.state.popupIsOpen} closeAction={this.closePopup} acceptAction={this.closePopup}>

          <p>
            <label>Id</label>
            <input type="text"/>
          </p>

        </Popup>
      </div>
    );
  }
}

AddMandantView.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
};