import styled from 'styled-components'

export const StyledRating = styled.div`
  & span {
    color: var(--text-base);
  }

  & span:nth-child(-n+${props => props.rateNumber}) {
    color: var(--primary)
  }
`