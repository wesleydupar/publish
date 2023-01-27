import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useOutletContext();
  const [currentUser, setCurrentUser] = useOutletContext();
  const [data, setData] = useState({ user: "", pwd: "" });
  const [formError, setFormError] = useState({ user: "", pwd: "", login: "" });
  const [manditory, setMandatory] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    let value = e.target.value;
    if (e.target.name === "pwd") {
      if (value.length < 8) {
        setFormError({
          ...formError,
          pwd: "Hey Bro your password is too short",
        });
      } else if (value.length > 12) {
        setFormError({
          ...formError,
          pwd: "Hey Bro your password is too long",
        });
      } else {
        setFormError({ ...formError, pwd: "" });
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    data["user"] === "" || data["pwd"] === ""
      ? setMandatory(true)
      : setMandatory(false);

    axios.get("http://localhost:4000/users").then((response) => {
      if (
        response.data[data.user - 1] &&
        response.data[data.user - 1].password === data.pwd
      ) {
        setSuccess(true);

        setData({ ...data, user: response.data[data.user - 1].name });
        setLoginErr("");
        setLoggedIn(true);
        setCurrentUser(response.data[data.user - 1].name);
        setName(response.data[data.user - 1].name);
        setData({ ...data, pwd: "" });
        navigate("./home", {
          state: { username: response.data[data.user - 1].name },
        });
      } else {
        setMandatory(true);
        setSuccess(false);
        setLoginErr("Invalid UserId and password");
      }
    });
  };
  useEffect(() => {
    setLoginErr("");
  }, [data]);

  return (
    <>
      {success ? (
        <h1 className="h6 text-success text-center bg-light w-25">
          {name} logged in successfully
        </h1>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div
          className="card shadow-lg rounded mx-auto w-30 transparent "
          style={{ width: "30%" }}
        >
          <h1 className="display-6  text-center pt-2">BonStay with Us</h1>
          <div className="card-body">
            <label htmlFor="userId">User Id</label>
            <input
              type="text"
              className="form-control mb-2"
              name="user"
              value={data.user}
              onChange={handleChange}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control mb-4"
              name="pwd"
              value={data.pwd}
              onChange={handleChange}
            ></input>
            {formError.pwd ? (
              <h1 className="h6 text-danger text-center">{formError.pwd}</h1>
            ) : null}
            <button
              type="submit"
              className="btn btn-success text-white w-100 mb-2"
            >
              Login
            </button>
            <div className="d-flex justify-content-center">
              <Link to="./registration" className="nav-link text-primary">
                Sign up
              </Link>
              &nbsp;
              <p>to create a new account</p>
            </div>
            {manditory ? (
              !success ? (
                <h1 className="h6 text-danger text-center">{loginErr}</h1>
              ) : null
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;

// issues documented here
