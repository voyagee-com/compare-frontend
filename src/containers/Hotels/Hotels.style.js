import styled from 'styled-components'

export const StyledHotel = styled.div`
  padding: 12px 12px 12px 0;
  /* text-align: right; */
  border-bottom: 1px dashed var(--brand04);

  .title {
    text-align: right;
  }
  & > div {
    text-align: right;
  }
`

export const TotalGuests = styled.div`
  margin: 12px 0;
  text-align: right;
`

export const Accomodation = styled.div`
  text-align: right;
`

export const CheckingDate = styled.div`
  display: grid;
  grid-template-columns: 50% 45%;
  grid-gap: 5%;
  margin: 12px 0;
  text-align: right;
  time {
    display: block;
    font-weight: 700;
  }
`

export const Subtotal = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 0%;
  margin: 12px 0;
  align-items: end;
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
      width: 48%;
      display: inline-block;
      border-bottom: 2px dotted var(--text-dark);
    }
  }
`