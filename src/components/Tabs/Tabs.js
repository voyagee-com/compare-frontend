import React, { useState } from 'react'

import { useCounter } from '../../store/index'

import Flights from '../Flights'
import TotalValue from '../TotalValue'

import { StyledTabs } from './Tabs.style'


// export const sendToStore = (item) => {
//   props.setStore({
//     compare: {
//       compareItems: item
//     }
//   })
// }

// export const setFlight = (value) => {

//   const { id, price: { grandTotal }} = value

//   // console.log(compareItems);

//   if (compareItems.length === 1){
//   //   // console.log('ttt', id);
//   //   // if(value.id !== id) {
//       console.log('quero entrar aqui');
//       console.log(value);
//   //     return
//   //   // }
//   }

//   if(!compareItems.length) {
//     const newItem = {
//       ...initialItem,
//       id: compareItems.length +1,
//       label: `Compare item ${compareItems.length +1}`,
//       flight: tabs,
//       combinedValue: parseFloat(grandTotal)
//     }
//     console.log("fez a primeira");
//     return sendToStore([newItem])
//   }
// }

const Tabs = () => {


  const [state, actions] = useCounter()
  const { compareItems } = state


  let initialItem = {
    id: 0,
    label: 'Tab 1',
    flight: {},
    hotel: {},
    combinedValue: 0
  }




  // const setFlight = (value) => {

  //   const { id, price: { grandTotal }} = value

  //   // console.log(compareItems);

  //   // if (compareItems.length === 1){
  //   //   // console.log('ttt', id);
  //   //   // if(value.id !== id) {
  //   //     console.log('quero entrar aqui');
  //   //     console.log(value);
  //   //     return
  //   //   // }
  //   // }

  //   if(!compareItems.length) {
  //     const newItem = {
  //       ...initialItem,
  //       id: compareItems.length +1,
  //       label: `Compare item ${compareItems.length +1}`,
  //       flight: tabs,
  //       combinedValue: parseFloat(grandTotal)
  //     }
  //     console.log("fez a primeira");
  //     return sendToStore([newItem])
  //   }
  // }

  // const createNewItem = (value) => {
  //   console.log('push');
  // }

  // switch (tabs.type) {
  //   case 'flight-offer':
  //     setFlight(tabs)
  //     break;
  //   case 'hotel-offer':
  //     setHotel()
  //     break;
  //   default:
  // }

  // Dont use
  // const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);
  // const Panel = tabsz && tabsz.find((tab) => tab.index === selectedTab);

  const [ selectedTab, setSelectedTab ] = useState(compareItems.length +1);
  const Panel = compareItems && compareItems.find((tab) => tab.id === selectedTab);


  return (

    <StyledTabs>

      <div role="tablist">
      {compareItems.map((tab) => (
        <button
          className={selectedTab === tab.id ? "active" : ""}
          onClick={() => setSelectedTab(tab.id)}
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={selectedTab === tab.id}
          aria-controls={`tabpanel-${tab.id}`}
          tabIndex={selectedTab === tab.id ? 0 : -1}
          id={`btn-${tab.id}`}
        >
          {tab.label}
        </button>
        ))}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {Panel && <>
          <Flights item={compareItems}/>
          <div>Hotels</div>
          <TotalValue item={compareItems} />
        </>}
        </div>
    </StyledTabs>

  )
}

export default Tabs
