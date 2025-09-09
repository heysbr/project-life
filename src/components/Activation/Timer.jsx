"use client";
import React, { useState, useEffect } from "react";

const Timer = ({ classname }) => {
  const [time, setTime] = useState(30); 

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId); 
    }
  }, [time]);

  return (
    <div className={`${classname}`}>
      {time === 0 ? <p>Time's up!</p> : <p>{`00:${time}`}</p>}
    </div>
  );
};

export default Timer;
