import { createStore, createSubscriber, createHook } from 'react-sweet-state'

const setCombinedValue = (oldValue, newValue) => {
  let combinedValue = oldValue + newValue
  return combinedValue
}

const getValue = (product) => {
  const { type } = product
  let productValue = 0
  switch(type) {
    case 'hotel-offers':
      productValue = parseFloat(product.offers[0].price.total)
      break
      case 'flight-offer':
        productValue = parseFloat(product.price.grandTotal)
      break
    default: productValue
  }

  return productValue
}


const Store = createStore({
  initialState: {
    compareItems: []
  },

  actions: {

    toFlight: (value) => ({ setState, getState }) => {

      // if(getState().compareItems.flight === undefined) {
      //   setState({ compareItems: [...getState().compareItems, getState().compareItems[0].flight = {value}]})
      //   return
      // }
      if (getState().compareItems.length === 0) {
        const internalFlight = {
          label: `Compare ${getState().compareItems.length +1}`,
          id: getState().compareItems.length +1,
          flight: { value },
          hotel: null,
          combinedValue: getValue(value)
        }

        return setState({ compareItems: [...getState().compareItems, internalFlight]})
      }

      if(
        getState().compareItems[getState().compareItems.length -1].hotel &&
        getState().compareItems[getState().compareItems.length -1].flight === null
      ){
        const internal = getState().compareItems[getState().compareItems.length -1].flight = { value }
        const currentTotalValue =  getState().compareItems[getState().compareItems.length -1].combinedValue;
        const productValue = getValue(value)
        const internalValue = getState().compareItems[getState().compareItems.length -1].combinedValue = setCombinedValue(currentTotalValue, productValue)
        setState({ compareItems: [getState().compareItems[getState().compareItems.length -1]] })
      }

    },
    toHotels: (value) => ({ setState, getState }) => {

      if (getState().compareItems.length === 0) {
        const internalHotel = {
          label: `Compare ${getState().compareItems.length +1}`,
          id: getState().compareItems.length +1,
          flight: null,
          hotel: { value },
          combinedValue: getValue(value)
        }
        return setState({ compareItems: [...getState().compareItems, internalHotel] })
      }

      if(
        getState().compareItems[getState().compareItems.length -1].flight &&
        getState().compareItems[getState().compareItems.length -1].hotel === null
      ){

        const internal = getState().compareItems[getState().compareItems.length -1].hotel = { value }
        const currentTotalValue =  getState().compareItems[getState().compareItems.length -1].combinedValue;
        const productValue = getValue(value)
        const internalValue = getState().compareItems[getState().compareItems.length -1].combinedValue = setCombinedValue(currentTotalValue, productValue)

        setState({ compareItems: [getState().compareItems[getState().compareItems.length -1]] })
      }

    },
    reset: () => ({ setState }) => {
      setState({ compareItems: [] })
    }
  },

  name: 'counter'
});

export const useCounter = createHook(Store);