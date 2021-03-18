import React, { useState } from "react"
import styled from "styled-components";
// import { CompareContextProvider } from "./contexts/CompareContext";
import Tabs from './components/Tabs'
import Flights from "./containers/Flights";
import TotalValue from "./components/TotalValue";

export const Compare = styled.div`
  display: grid;
  /* grid-template-rows: 2vh 35vh 35vh 20vh; */
  grid-template-rows: 2vh 10vh 10vh 5vh;
  margin: 16px;
`;
// let compareArr = []

export default function Root(props) {

  const [ newCompare, setNewCompare ] = useState([]);
  const [ flightProviderValue, setFlightProviderValue ] = useState([]);

  window.addEventListener("flightOffer", (event) => {
    // console.log('0', compareArr);

    // if(!compareArr.length) {
    //   console.log('cai aqii');

    //   const insertNewCompare = {
    //     id: newCompare.length +1
    //   }

    //   // compareArr.push(insertNewCompare)
    //   compareArr = [...compareArr, insertNewCompare]
    //   console.log(compareArr);

    //   setNewCompare(compareArr)
    // }

  });

  return (
    <CompareContextProvider
      value={newCompare}
      flightValues={flightProviderValue}
    >
      <Tabs tabs={[]} />
    </CompareContextProvider>
    );

}