import React from "react";
import axios from "axios";
import { useState } from "react";
const DeleteUser = () => {
  const [userid, SetUserId] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete("http://localhost:4000/users/" + userid)
      .then((response) => {
        console.log(response);
        setSuccess("User Deleted successfully" + userid);
        setError("");
      })
      .catch(() => {
        setError("Unable to delete user");
        setSuccess("");
      });
  };
  return (
    <div>
      <h3>DeleteUser</h3>
      <form onSubmit={handleDelete}>
        UserId:
        <input
          name="username"
          value={userid}
          onChange={(event) => {
            SetUserId(event.target.value);
          }}
        />
        <button type="submit">Delete</button>
        {success ? <p>{success}</p> : null}
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};
export default DeleteUser;
