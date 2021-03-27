import React, { useState } from "react"
// import { StoreProvider } from 'react-context-global-store'
// import { Store } from './store'
// import Tabs from './components/Tabs'
import styled from "styled-components";

export const Compare = styled.div`
  display: grid;
  /* grid-template-rows: 2vh 35vh 35vh 20vh; */
  grid-template-rows: 2vh 10vh 10vh 5vh;
  margin: 16px;
`;


export default function Root(props) {

  const [ newCompare, setNewCompare ] = useState([]);
  // const [ flightProviderValue, setFlightProviderValue ] = useState([]);

  window.addEventListener("flightOffer", (event) => {
    setNewCompare(event.detail[0])
  });

  return (
    <div>Compare</div>
    // <StoreProvider store={Store}>
    //   <Tabs tabs={newCompare} />
    // </StoreProvider>
    );

}