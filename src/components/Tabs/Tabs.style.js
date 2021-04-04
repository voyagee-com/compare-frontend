import styled from "styled-components";

export const StyledTabs = styled.div`
[role="tablist"] {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #dee2e6;
  position: relative;
}

[role="tablist"] button {
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  display: block;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: 0 1px;
  outline: none;
  background-color: #fff;
  transition: border 0.2s ease-in-out 0s;
}

[role="tablist"] button.active,
[role="tablist"] button:focus,
[role="tablist"] button:hover {
  border-width: 1px;
  border-color: #e9ecef #e9ecef #b41c1c;
}

[role="tablist"] button.active {
  color: #495057;
  background-color: #f8f8f8;
}

[role="tabpanel"] {
  text-align: left;
  padding: 1rem;
  background-color: #f8f8f8;
  /* background-color: blue; */
  box-shadow: 1px 1px 2px rgb(204 204 204 / 75%);
}

.tabs-component.vertical {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.tabs-component.vertical [role="tablist"] {
  flex-direction: column;
}

.tabs-component.vertical [role="tabpanel"] {
  flex: 1;
}

[role="tablist"] button {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 0;
}

.tabs-component.vertical [role="tablist"] button.active,
.tabs-component.vertical [role="tablist"] button:focus,
.tabs-component.vertical [role="tablist"] button:hover {
  border-color: #e9ecef transparent #e9ecef #b41c1c;
}
`