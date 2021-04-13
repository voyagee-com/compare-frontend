import React, { useEffect } from 'react'
import { useCounter, CounterSubscriber } from './store/index'
// import Tabs from './components/Tabs'
import Flights from './containers/Flights'
import Hotels from './containers/Hotels'
import TotalValue from './containers/TotalValue'
import styled from 'styled-components'

export const Compare = styled.div`
  display: grid;
  /* grid-template-rows: 2vh 27vh 27vh 27vh; */
  grid-template-rows: 26vh 26vh 15vh;
  width: 320px;
  padding: 16px;
  background-color: var(--lightest);
`;

export const Tab = styled.div`
  & input[name="sections"] {
    left: -9999px;
    position: absolute;
    top: -9999px;

    &:checked + label {
      background-color: var(--brand04);
    }

    &:checked ~ article {
      display: block;
    }
  }

  & section {
    display: block;
    background-color: var(--lightest);

    & label {
      z-index:100;
      position: relative;
      display: block;
      padding: 16px;
      border-bottom: 3px solid var(--base);
      writing-mode: sideways-lr;
      font-size: 1em;
      font-weight: bold;
      color: var(--text-dark);
      background-color: var(--base);
      cursor: pointer;
    }

    & article {
      display: none;
      left: 52px;
      min-width: 300px;
      position: absolute;
      top: 0;

      &::after {
        background-color: #ccc;
        bottom: 0;
        content: "";
        display: block;
        border-left: thin solid var(--brand04);
        position: absolute;
        top: 0;
        z-index:1;
      }
    }
  }
`;

export default function Root(props) {
  const [state, actions] = useCounter()

  const { compareItems } = state

  useEffect(() => {
    window.addEventListener("@voyage-flight-app-flightOffer", (event) => {
      actions.toFlight(event.detail[0])
    });
  }, [])

  useEffect(() => {
    window.addEventListener("@voyage-hotel-app-hotelOffer", (event) => {
      actions.toHotels(event.detail[0])
    });
  }, [])


  return (
    <Tab>
      { compareItems && compareItems.map(({id, label, hotel, flight, combinedValue}) => (
        <section className="key" key={id}>
          <input type="radio" name="sections" id={`option${id}`} checked />
          <label for={`option${id}`}>{label}</label>
          <article>
            <Compare>
              {/*<button>lixo</button>*/}
              <Flights item={flight}/>
              <Hotels item={hotel}/>
              <TotalValue combinedValue={combinedValue} />
            </Compare>
          </article>
        </section>
      ))}
    </Tab>
  );
}
