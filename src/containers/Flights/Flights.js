import React, { useContext } from "react";
import { CompareContext } from "../../contexts/CompareContext";
import { StyledFlight, Segments, Subtotal } from "./Flights.style";

const toCurrency = (number) => {
  const options = { style: "currency", currency: "USD" };
  const convertedCurrency = new Intl.NumberFormat("en-US", options).format(
    number
  );
  return convertedCurrency;
};

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

const Flights = () => {
  const { flights } = useContext(CompareContext);
  const { arrival, departure, grandTotal } = flights;

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
