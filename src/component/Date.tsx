"use client";

import { useEffect, useState } from "react";

const DateDisplay = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDate(
        new Date().toLocaleDateString("bn-BD", {
          dateStyle: "full",
        })
      );
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return <p>{date}</p>;
};

export default DateDisplay;