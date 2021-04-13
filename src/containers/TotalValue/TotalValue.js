import React from 'react'
import { StyledTotalValue, Button, Subtotal } from './TotalValue.style'

const toCurrency = (number) => {
  const options = { style: "currency", currency: "USD" };
  const convertedCurrency = new Intl.NumberFormat("en-US", options).format(
    number
  );
  return convertedCurrency;
};

const TotalValue = ({ combinedValue }) => {
  return (
    <StyledTotalValue>
      <Subtotal>
        <h4>Total </h4>
        <span>{toCurrency(combinedValue)}</span>
      </Subtotal>
      <Button>Go to checkout</Button>
    </StyledTotalValue>
  );
};

export default TotalValue;
