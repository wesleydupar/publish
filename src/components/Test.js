import React, { useEffect, useState } from "react";

export default function Test() {
  const [x, setX] = useState(true);
  return <>{x ? <h1>{setX(false)}</h1> : <h1>no</h1>}</>;
}
