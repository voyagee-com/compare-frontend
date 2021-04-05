import React, { useContext } from "react";
import { CompareContext } from "../../contexts/CompareContext";
import { StyledCompare } from "./Compare.style";

const Flights = ({children}) => {
  const { combinedValue, flights } = useContext(CompareContext);
  console.log(combinedValue, flights);
  // const { total } = combinedValue;
  console.log(children);
  return (
    <StyledCompare>
      {children}
    </StyledCompare>
  );
};

export default Flights;
