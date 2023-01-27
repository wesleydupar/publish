import { createAction } from "redux-actions";
import axios from "axios";
import IssueConstants from "../Constants/IssueConstants.js";
export function Login(data) {
  return (dispatch) => {
    axios.get("http://localhost:4000/users").then((res) => {
      let value = res.data;
      var result = value.find(
        (val) =>
          val.username === data.username && val.password === data.password
      );
      if (result) {
        dispatch(LoginMe(true));
      } else {
        dispatch(LoginMe(false));
      }
    });
  };
}
export function LoginMe(isAuthenticated) {
  return {
    type: "LOGIN",
    isAuthenticated,
  };
}
