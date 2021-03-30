import React, { useEffect } from 'react'
import { useCounter, CounterSubscriber } from './store/index'
import Tabs from './components/Tabs'
import styled from 'styled-components'

export const Compare = styled.div`
  display: grid;
  /* grid-template-rows: 2vh 35vh 35vh 20vh; */
  grid-template-rows: 2vh 10vh 10vh 5vh;
  margin: 16px;
`;

export default function Root(props) {
  const [state, actions] = useCounter()

  // console.log(actions);

  window.addEventListener("flightOffer", (event) => {
    console.log('flightOffer');
    // actions.reset()
    actions.toFlight(event.detail[0])
  });

  return (
    <Tabs />
  );

}