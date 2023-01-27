import IssueConstants from "./../Constants/IssueConstants";
import { combineReducers } from "redux";
const initState = {
  user: "",
  feedbackDetail: [],
};
const login = (state = initState, action) => {
  switch (action.type) {
    case IssueConstants.LOGIN:
      return {
        ...state,
        isAuthed: action.isAuthenticated,
      };
    case IssueConstants.LOGOUT:
      return {
        ...state,
        isAuthed: false,
      };
    default:
      return state;
  }
};
