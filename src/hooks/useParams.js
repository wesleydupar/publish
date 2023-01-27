import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Delete = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const params = useParams();
  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete("http://localhost:4000/users/" + params.id)
      .then((response) => {
        console.log(response);
        setSuccess("User Deleted successfully" + params.id);
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
        <button type="submit">Delete</button>
        {success ? <p>{success}</p> : null}
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};
export default Delete;
