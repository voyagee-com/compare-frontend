import React, { createContext } from "react";

export const CompareContext = createContext({});

export const CompareContextProvider = ({ children, value, flightValues }) => {
  let flightValue = {
    departure: {},
    arrival: {},
    grandTotal: 0,
  };

  let hotelValue = {
    grandTotal: 0,
  };

  let combinedValue = {
    total: 100.08,
  };

  const setCombinedValue = (newValue) => {
    combinedValue.total = combinedValue.total + parseFloat(newValue);
    return combinedValue;
  };

  var obsvr = {
    addValue: (value) => {
      setCombinedValue(value);
    },
    removeValue: () => {},
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

  const setFlightContext = (value) => {
    const {
      itineraries,
      price: { grandTotal },
    } = value;

    const [start, finish] = itineraries;

    flightValue = {
      departure: steps(start),
      arrival: steps(finish),
      grandTotal: grandTotal,
    };

    obsvr.addValue(grandTotal);
  };

  const checkType = async (type, value) => {
    switch (type) {
      case "flight-offer":
        await setFlightContext(value);
        break;
      case "hotel-offers":
        await setFlightContext(value);
        break;
      default:
    }
  };

  if (value) {
    console.log('value de context', value);
    // const { type } = value[0];
    // checkType(type, value[0]);
  }

  const CompareContextValue = {
    // compare: [{}]
    compareId: 10,
    flights: flightValue,
    hotels: hotelValue,
    combinedValue: combinedValue,
  };

  return (
    <CompareContext.Provider value={CompareContextValue}>
      {children}
    </CompareContext.Provider>
  );
};
