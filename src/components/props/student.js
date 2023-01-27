import React from "react";
import { Link } from "react-router-dom";
//object form
const Student = (props) => {
  console.log(props);
  return (
    <div>
      <h4>Student Demo</h4>
      <h4>Name is {props.name}</h4>
      <h4>Emailid is {props.email}</h4>
      <h4>
        Address is {props.address.city} and zipcode is {props.address.zipcode}
      </h4>
    </div>
  );
};
export default Student;
