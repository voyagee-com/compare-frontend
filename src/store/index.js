import { createStore, createSubscriber, createHook } from 'react-sweet-state'

const setCombinedValue = (flight) => {

  const { grandTotal } = flight.price
  return parseFloat(grandTotal)
}

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    compareItems: []
  },
  // actions that trigger store mutation
  actions: {
    toFlight: (value) => ({ setState, getState }) => {
      // mutate state syncronously
      if (getState().compareItems.length !== 0) {
        console.log('Não é mais 0');
        return
      }
      setState({
        compareItems:
        [...getState().compareItems,
          {
            label: `Compare ${getState().compareItems.length +1}`,
            id: getState().compareItems.length +1,
            flight: { value },
            hotel: {},
            combinedValue: setCombinedValue(value)
          }
        ]
      })
    },
    toHotels: () => ({ setState }),
    reset: () => ({ setState }) => {
      setState({ compareItems: [] })
    }
  },

  // optional, mostly used for easy debugging
  name: 'counter'
});
// export const CounterSubscriber = createSubscriber(Store);
export const useCounter = createHook(Store);