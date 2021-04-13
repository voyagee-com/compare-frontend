import React from 'react'
import { toCurrency, toHourDisplay, toDateDisplay } from '../../utils'
import EmptyCard from '../../components/EmptyCard'
import Rating from '../../components/Rating'
import { StyledHotel, CheckingDate, Accomodation, TotalGuests, Subtotal } from './Hotels.style'

const Hotels = ({ item }) => {
  // console.log('item hotel', item);

  if (!item || !Object.entries(item).length) {
    return (
      <EmptyCard
        productTitle="Hotel"
        productMessage="Add a Hotel to find the best choice for your trip"
      />
    )
  }

  const { hotel: { name, rating }, offers } = item.value
  const { checkInDate, checkOutDate, room, guests, price: { total }} = offers[0];

  return (
    <StyledHotel>
      <h1 className="title">{name}</h1>
      <Rating rateNumber={rating} />
      <TotalGuests>Total guests: <strong>{guests.adults}</strong></TotalGuests>
      <CheckingDate>
        <p>Check-in
         <time dateTime={checkInDate}>{toDateDisplay(checkInDate)}</time>
        </p>
        <p>Check-out
         <time dateTime={checkOutDate}>{toDateDisplay(checkOutDate)}</time>
        </p>
      </CheckingDate>
      <Accomodation>
        <p>Bads {room.typeEstimated.beds}x {room.typeEstimated.bedType}</p>
      </Accomodation>
      <Subtotal>
        <h4>Total hotel</h4>
        <span>{toCurrency(total)}</span>
    </Subtotal>
    </StyledHotel>
  )
}

export default Hotels