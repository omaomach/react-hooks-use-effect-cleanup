import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    //returning a cleanup function
    return function() {
      clearInterval(timerId)
    }

  }, []);

  console.log("running")

  return <div>{time.toString()}</div>;
}

export default Clock;
