import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <HashLoader color={"#85C1E9"} size={150} />
    </div>
  );
};

export default Loader;
