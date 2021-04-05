import React from 'react'
import { toCurrency, toHourDisplay, toDateDisplay } from '../../utils'
import EmptyCard from '../../components/EmptyCard'
import { StyledFlight, Segments, Subtotal } from './Flights.style'

const qtdStops = (stops) => {
  const toStops =
    stops === 0
      ? `Direct Flight`
      : stops === 1
      ? `${stops} Stop`
      : `${stops} Stops`;
  return toStops;
};

const steps = (segment) => {
  const { segments } = segment;
  const { length, 0: firstStep, [length - 1]: lastStep } = segments;
  const internalSegment = {
    departure: firstStep.departure,
    carrierCode: firstStep.carrierCode,
    arrival: lastStep.arrival,
    carrierCode: lastStep.carrierCode,
    stops: length - 1,
  };
  return internalSegment;
};

const Flights = ({ item }) => {

  if (!Object.entries(item).length) {
    return (
      <EmptyCard
        productTitle="Flight"
        productMessage="Add a Flight to find the best choice for your trip"
      />
    )
  }
  const { itineraries, price: { grandTotal } } = item.value
  const [start, finish] = itineraries
  const departure  = steps(start)
  const arrival = steps(finish)

  return (
    <StyledFlight>
      <section>
        <div>
          <h3>Depart</h3>
          <time dateTime={departure.departure.at}>
            {toDateDisplay(departure.departure.at)}
          </time>
        </div>
        <Segments>
          <div>
            <span>{departure.departure.iataCode}</span>
            <time dateTime={departure.departure.at}>
              {toHourDisplay(departure.departure.at)}
            </time>
          </div>
          <span>{qtdStops(departure.stops)}</span>
          <div>
            <span>{departure.arrival.iataCode}</span>
            <time dateTime={departure.arrival.at}>
              {toHourDisplay(departure.arrival.at)}
            </time>
          </div>
        </Segments>
      </section>
      <section>
        <div>
          <h3>Return</h3>
          <time dateTime={arrival.departure.at}>
            {toDateDisplay(arrival.departure.at)}
          </time>
        </div>
        <Segments>
          <div>
            <span>{arrival.departure.iataCode}</span>
            <time dateTime={arrival.departure.at}>
              {toHourDisplay(arrival.departure.at)}
            </time>
          </div>
          <span>{qtdStops(arrival.stops)}</span>
          <div>
            <span>{arrival.arrival.iataCode}</span>
            <time dateTime={arrival.arrival.at}>
              {toHourDisplay(arrival.arrival.at)}
            </time>
          </div>
        </Segments>
      </section>
      <Subtotal>
        <h4>Subtotal</h4>
        <span>{toCurrency(grandTotal)}</span>
      </Subtotal>
    </StyledFlight>
  );
};

export default Flights;
