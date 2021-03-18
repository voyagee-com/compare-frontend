import React, { useState, useContext } from 'react';
// import { CompareContext } from "../../contexts/CompareContext";
// import {​​​​​ connect }​​​​​ from 'react-redux';
import TotalValue from '../TotalValue'
import { StyledTabs } from './Tabs.style'

const Tabs = ({newValue}) => {
  console.log('new', newValue);
  // const { combinedValue } = useContext(CompareContext);
  // console.log(combinedValue);

  const tabsz = [
    {
      label: "Tab One",
      index: 1,

    },
    {
      label: "Tab Two",
      index: 2,

    },
    // {
    //   label: "Tab Three",
    //   index: 3,
    //   Component: TotalValue,
    //   Total: TotalValue,
    // }
  ];

  const [ selectedTab, setSelectedTab ] = useState(tabsz.length);
  // const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);
  const Panel = tabsz && tabsz.find((tab) => tab.index === selectedTab);
  // console.log(Panel);
  return (
    <StyledTabs>
      <div role="tablist">
      {tabsz.map((tab) => (
        <button
          className={selectedTab === tab.index ? "active" : ""}
          onClick={() => setSelectedTab(tab.index)}
          key={tab.index}
          type="button"
          role="tab"
          aria-selected={selectedTab === tab.index}
          aria-controls={`tabpanel-${tab.index}`}
          tabIndex={selectedTab === tab.index ? 0 : -1}
          id={`btn-${tab.index}`}
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
          <div>teste {Panel.index}</div>
          <TotalValue />
          {/*<Panel.Component index={selectedTab} />
        <Panel.Total index={selectedTab} />*/}
        </>}
      </div>
    </StyledTabs>
  )
}

// ​​​​const mapStateToProps = store => ({​​​​​
//   newValue: store.compare
// }​​​​​);

// export default connect(mapStateToProps)(Tabs)
export default Tabs