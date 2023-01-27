import React from "react";
import { useOutletContext } from "react-router-dom";

// import { useParams } from "react-router-dom";
// import Login from "./login";
import { useLocation } from "react-router-dom";

const Home = (props) => {
  // console.log(props);
  const currentUser = useOutletContext();
  const location = useLocation();
  // const username = location.state.username;
  return (
    <>
      <div className="jumbotron w-50 m-auto bg-light rounded shadow p-4">
        <h1 className="text-center display-3">Welcome &nbsp;{currentUser} !</h1>
        <p className="text-center">
          BonStay always provides you an amazing and pleasant stay with your
          friends and family at reasonable prices. we provide wel-designed space
          with modern amenities. You can resreve a room faster with our
          efficient BonStay app
        </p>
      </div>
    </>
  );
};

export default Home;

// How do i display the name of the currently logged in user ?
// for the link how can i have homepage rendered when the user is logged in and login page when user is not logged in
// also how do i change the header when showing this component
