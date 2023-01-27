import axios from "axios";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
// render all bookings for the currently logged in user.
export default function Bookings() {
  const currentUser = useOutletContext();

  useEffect(() => {
    axios.get();
  });
  return (
    <div className="display-1 text-center">
      sorry {currentUser} Bookings coming soon!
    </div>
  );
}
