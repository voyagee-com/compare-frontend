import styled from 'styled-components'

export const StyledHotel = styled.div`
  text-align: right;
  border-bottom: 1px dashed var(--brand04);
  .title {
    text-align: right;
  }
`

export const TotalGuests = styled.div`
  margin: 12px 0;
`

export const CheckingDate = styled.div`
  display: grid;
  grid-template-columns: 50% 45%;
  grid-gap: 5%;
  margin: 12px 0;

  time {
    display: block;
    font-weight: 700;
  }
`

export const Subtotal = styled.div`
  display: grid;
  grid-template-columns: 20% 75%;
  grid-column-gap: 5%;
  margin: 12px 0;
  & span {
    position: relative;
    text-align: right;
    font-size: 22px;
    font-weight: 800;
    &::before {
      content: "";
      bottom: 4px;
      left: 12px;
      position: absolute;
      width: 50%;
      display: inline-block;
      border-bottom: 2px dotted var(--text-dark);
    }
  }
`