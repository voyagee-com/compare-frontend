import React from 'react'
import { StyledEmptyCard } from './EmptyCard.style'

const EmptyCard = ({ productTitle, productMessage }) => {
  return (
    <StyledEmptyCard>
      <h3>{productTitle}</h3>
      <p>{productMessage}</p>
    </StyledEmptyCard>
  )
}

export default EmptyCard