// import React from "react";
import { useParams } from "react-router-dom";

const NewsDet = () => {
  const { _id } = useParams();
  console.log(_id);
  return (
    <div>
      <h3>details</h3>
    </div>
  );
};

export default NewsDet;
