import React, { useContext } from "react";
import { CompareContext } from "../../contexts/CompareContext";
import { StyledCompare } from "./Compare.style";

const Flights = ({children}) => {
  const { combinedValue, flights } = useContext(CompareContext);
  return (
    <StyledCompare>
      {children}
    </StyledCompare>
  );
};

export default Flights;
