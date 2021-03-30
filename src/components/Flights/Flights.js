import React from 'react'
import { StyledFlight, Segments, Subtotal } from './Flights.style'

const toHourDisplay = (datetime) => {
  const options = { hour: "2-digit", minute: "2-digit", timeZone: "UTC" };
  const convertedDateTime = new Date(datetime).toLocaleTimeString(
    "en-US",
    options
  );
  return convertedDateTime;
};

const toDateDisplay = (datetime) => {
  const options = { month: "long", day: "numeric" };
  const convertedDateTime = new Date(datetime).toLocaleDateString(
    "en-US",
    options
  );
  return convertedDateTime;
};

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
  const { itineraries } = item[0].flight.value
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
    </StyledFlight>
  );
};

export default Flights;
