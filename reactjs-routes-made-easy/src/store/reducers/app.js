import { SAVE_EMPLOYEES } from "../actions/actionTypes";

import { updateObject } from "../utils";

const initialState = {
  users: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_EMPLOYEES:
      return updateObject(state.users, { users: action.payload });
    default:
      return state;
  }
};

export default appReducer;
