import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Image from "./card_img.webp";
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [newUser, setNewUser] = useState({ name: "", id: "" });
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  const [manditory, setManditory] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let value = e.target.value;
    let mailformat = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let telFormat = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "name") {
      if (value.length < 3) {
        setFormError({
          ...formError,
          name: "name field must have minimum 3 characters",
        });
      } else {
        setFormError({ ...formError, name: "" });
      }
    }
    if (e.target.name === "address") {
      if (value.length < 1) {
        setFormError({
          ...formError,
          address: "address must not be left blank",
        });
      } else {
        setFormError({ ...formError, address: "" });
      }
    }

    if (e.target.name === "phone") {
      if (!value.match(telFormat)) {
        setFormError({
          ...formError,
          phone: "phone field must have 10 digits",
        });
      } else {
        setFormError({ ...formError, phone: "" });
      }
    }
    if (e.target.name === "email") {
      if (!value.match(mailformat)) {
        setFormError({ ...formError, email: "not a valid email" });
      } else {
        setFormError({ ...formError, email: "" });
      }
    }
    if (e.target.name === "password") {
      if (value.length < 8 || value.length > 12) {
        setFormError({
          ...formError,
          password: "password must be 8-12 characters long",
        });
      } else {
        setFormError({ ...formError, password: "" });
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.address === "" ||
      formData.phone === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      setManditory(true);
    } else {
      setManditory(false);
      //post user to json
      axios
        .post("http://localhost:4000/users", formData)
        .then((res) => {
          setSuccess(true);
          setNewUser({ ...newUser, name: res.data.name, id: res.data.id });
        })
        .catch((err) => {
          setSuccess(false);
        });
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mx-auto rounded shadow w-75 transparent">
          <div className="col-6 d-flex flex-column .card-img align-self-center">
            <h1 className=" display-6 mb-3 text-center text-muted pt-2">
              Welcome to BonStay!
            </h1>
            <img
              src={Image}
              alt="beautiful place"
              className="img img-fluid rounded"
            />
          </div>
          <div className="col-6 p-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control mb-2"
              name="name"
              value={formData.name}
              onChange={handleChange}
            ></input>
            <p className="text-danger  text-center">{formError.name}</p>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control mb-2"
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></input>
            <p className="text-danger  text-center">{formError.address}</p>

            <label htmlFor="phone">Phone No</label>
            <input
              type="tel"
              className="form-control mb-2"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            ></input>
            <p className="text-danger  text-center">{formError.phone}</p>
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
            <p className="text-danger  text-center">{formError.email}</p>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control mb-4"
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></input>
            <p className="text-danger  text-center">{formError.password}</p>
            {/* check bootstrap documentation to figure out how to modify the sass var for color on buttons */}
            <button
              type="submit"
              className="btn btn-success text-white"
              style={{ width: "100%" }}
            >
              Register
            </button>
            <button className=" btn btn-link" onClick={() => navigate("/")}>
              Already have an account?
            </button>
          </div>
          {manditory ? (
            <p className="text-center text-danger h5">
              All fields must be filled out
            </p>
          ) : null}
          {success ? (
            <p className="text-center text-success h5 pb-2">
              Welcome {newUser.name}! your Login Id is {newUser.id}!
            </p>
          ) : //i want the Id displayed when the user creates the account
          null}
        </div>
      </form>
    </div>
  );
};

export default Registration;

//issues documented here

//why does the screen grow when i click on the submit button?

// I want the new users id displayed at the bottom of the screen
