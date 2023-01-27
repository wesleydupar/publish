import { useEffect, useState } from "react";
import axios from "axios";
const ShowUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch(() => {
        setError("Unable to connect api");
      });
  }, []);
  return (
    <div>
      <h3>ShowUsers</h3>
      {users ? (
        <table className="table table-bordered">
          <thead>
            <th>Id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Action</th>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.password}</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        "No users found"
      )}
    </div>
  );
};
export default ShowUsers;
