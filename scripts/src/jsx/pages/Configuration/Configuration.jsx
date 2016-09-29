import React, { Component, PropTypes } from 'react';

export default class Configuration extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

// // import SubHeader from '../../components/SubHeader';
// // import MandantView from './components/MandantView';

// export default class Configuration extends Component {
//   constructor(props) {
//     super(props);
//     this.state = props;

//     this.changeMandant = this.changeMandant.bind(this);
//     this.addMandant = this.addMandant.bind(this);
//     this.restoreProperty = this.restoreProperty.bind(this);
//     this.changeProperty = this.changeProperty.bind(this);
//   }

//   /**
//    * @param {String} id - The id of the mandant.
//    */
//   changeMandant(id) {
//     console.log(id);
//   }

//   /**
//    * @param {String} id - The id of the mandant.
//    * @param {String} name - The name of the mandant.
//    * @param {String} code - The code of the mandant.
//    * @param {String} description - The description of the mandant.
//    */
//   addMandant(id, name, code, description) {
//     alert("ADD");
//   }

//   /**
//    * @param {String} name - The name of the property.
//    */
//   restoreProperty(name) {

//   }

//   /**
//    * @param {String} name - The name of the property.
//    * @param {[String]} values - The new value of the property.
//    */
//   changeProperty(name, values) {

//   }

//   render() {
//     const { name, code } = this.state.currentMandant;
//     const subHeader = `${name} (${code})`;

//     return (
//       <div>
//         <SubHeader>{subHeader}</SubHeader>

//         {this.renderMandantView()}
//       </div>
//     );
//   }

//   renderMandantView() {
//     if (this.state.isMultiClientSystem) {
//       return (
//         <MandantView
//           currentMandantId={this.state.currentMandant.id}
//           mandantIds={this.state.mandantIds}
//           onChange={this.changeMandant}
//           onAdd={this.addMandant}
//           userIsAuthorized={this.state.userIsAuthorized}
//         />
//       );
//     } else return null;
//   }
// }

// Configuration.propTypes = {
//   isMultiClientSystem: React.PropTypes.bool.isRequired,
//   userIsAuthorized: React.PropTypes.bool.isRequired,
//   currentMandant: React.PropTypes.object,
//   mandantIds: React.PropTypes.arrayOf(React.PropTypes.string),
// };
