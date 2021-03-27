import React from "react";
import styled from "styled-components";
import { Subtotal } from '../Flights/Flights.style'

export const StyledTotalValue = styled.div``;

export const Button = styled.button`
  width: max-content;
  padding: 8px 24px;
  line-height: 1.5em;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  border: 0;
  border-radius: 24px;
  color: var(--lightest);
  background: var(--primary);
  cursor: pointer;
`;

const TotalValue = ({item}) => {

  const { combinedValue } = item[0]
  return (
    <StyledTotalValue>
      <Subtotal>
        <h4>Total</h4>
        <span>{combinedValue}</span>
      </Subtotal>
      <Button>Go to checkout</Button>
    </StyledTotalValue>
  );
};

export default TotalValue;
