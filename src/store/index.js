import { createStore, createSubscriber, createHook } from 'react-sweet-state'

const setCombinedValue = (flight) => {
  const { grandTotal } = flight.price
  return parseFloat(grandTotal)
}

const Store = createStore({
  initialState: {
    compareItems: []
  },

  actions: {
    toFlight: (value) => ({ setState, getState }) => {

      const internalFlight = {
        label: `Compare ${getState().compareItems.length +1}`,
        id: getState().compareItems.length +1,
        flight: { value },
        hotel: {},
        combinedValue: setCombinedValue(value)
      }

      setState({ compareItems: [...getState().compareItems, internalFlight]})

    },
    toHotels: () => ({ setState }),
    reset: () => ({ setState }) => {
      setState({ compareItems: [] })
    }
  },

  name: 'counter'
});

export const useCounter = createHook(Store);