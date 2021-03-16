import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CompareContextProvider } from "./contexts/CompareContext";

import Flights from "./containers/Flights";
import TotalValue from "./components/TotalValue";

export const Compare = styled.div`
  display: grid;
  grid-template-rows: 70vh 10%;
  margin: 16px;
`;

export default function Root(props) {
  const [providerValue, setProviderValue] = useState([]);
  const [hasFlight, setHasFlight] = useState(false);

  useEffect(() => {
    window.addEventListener("flightOffer", (event) => {
      setProviderValue(event.detail);
    });
    // setProviderValue(mockFlights)
    setHasFlight(true);
  }, []);

  return (
    <CompareContextProvider value={providerValue}>
      <Compare>
        {hasFlight && (
          <div>
            <Flights />
          </div>
        )}
        <TotalValue />
      </Compare>
    </CompareContextProvider>
  );
}
