import { Component } from "react";
import { createStore, combineReducers } from "redux";

import AppReducer from './reducers/app';

const rootReducers = combineReducers({
  app: AppReducer
});

const storeConfig = createStore(rootReducers);

export default storeConfig;


// class Test extends Component {
//   state = {
//     buttonClicked: true
//   };

//   handleButtonClick() {
//     console.log(this.state.buttonClicked);
//   }

//   render() {
//     return (
//       <button onClick={}>Test class button</button>
//     );
//   }
// }