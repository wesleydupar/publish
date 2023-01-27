import React from "react";
import { useEffect, useState } from "react";
const UseEffectDemo = () => {
  //mounting+any change in any of state/props
  const [data, setData] = useState(0);
  const [counter, setCounter] = useState(10);
  //   useEffect(() => {
  //     console.log("use effect called");
  //   });
  //once/api calls
  // useEffect(() => {
  //   console.log("use effect called");
  // }, []);

  //   mounting+specific state/prop change
  useEffect(() => {
    console.log("use effect called");
  }, [data]);
  //   Unmounting:clean task
  // useEffect(()=>{
  //   return()=>{  //code}
  // })
  return (
    <div>
      <p>UseEffectDemo</p>
      <p>Data:{data}</p>
      <p>Counter :{counter}</p>
      <input
        type="button"
        value="Click "
        onClick={() => {
          setData(data + 1);
        }}
      />
      <input
        type="button"
        value="Counter "
        onClick={() => {
          setCounter(counter + 1);
        }}
      />
    </div>
  );
};
export default UseEffectDemo;
