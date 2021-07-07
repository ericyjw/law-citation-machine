import { CLEAR_RESULT, SET_RESULT } from "./app-action";

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_RESULT:
      return { formatted: action.payload };
    case CLEAR_RESULT:
      return { formatted: "" };
    default:
      throw new Error();
  }
};

export default appReducer;
