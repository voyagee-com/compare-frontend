export const mockFlights = [
  {
    type: "flight-offer",
    id: "70",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: "2021-03-01",
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: "PT4H5M",
        segments: [
          {
            departure: {
              iataCode: "BSB",
              at: "2021-03-01T09:30:00",
            },
            arrival: {
              iataCode: "SDU",
              at: "2021-03-01T11:15:00",
            },
            carrierCode: "AD",
            number: "4792",
            aircraft: {
              code: "320",
            },
            operating: {
              carrierCode: "AD",
            },
            duration: "PT1H45M",
            id: "9",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SDU",
              at: "2021-03-01T12:30:00",
            },
            arrival: {
              iataCode: "CGH",
              at: "2021-03-01T13:35:00",
            },
            carrierCode: "AD",
            number: "4743",
            aircraft: {
              code: "E95",
            },
            operating: {
              carrierCode: "AD",
            },
            duration: "PT1H5M",
            id: "10",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        duration: "PT4H10M",
        segments: [
          {
            departure: {
              iataCode: "CGH",
              at: "2021-03-05T14:45:00",
            },
            arrival: {
              iataCode: "SDU",
              at: "2021-03-05T15:45:00",
            },
            carrierCode: "AD",
            number: "4744",
            aircraft: {
              code: "E95",
            },
            operating: {
              carrierCode: "AD",
            },
            duration: "PT1H",
            id: "73",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SDU",
              at: "2021-03-05T17:05:00",
            },
            arrival: {
              iataCode: "BSB",
              at: "2021-03-05T18:55:00",
            },
            carrierCode: "AD",
            number: "4796",
            aircraft: {
              code: "320",
            },
            operating: {
              carrierCode: "AD",
            },
            duration: "PT1H50M",
            id: "74",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "1498.02",
      base: "1467.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "1498.02",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AD"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "499.34",
          base: "489.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "9",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "10",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            brandedFare: "AZUL",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "73",
            cabin: "ECONOMY",
            fareBasis: "LEEBFZ0L",
            brandedFare: "AZUL",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "74",
            cabin: "ECONOMY",
            fareBasis: "GEEBFZ0L",
            brandedFare: "AZUL",
            class: "G",
            includedCheckedBags: {
              quantity: 0,
            },
          },
        ],
      },
      {
        travelerId: "2",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "499.34",
          base: "489.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "9",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "10",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            brandedFare: "AZUL",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "73",
            cabin: "ECONOMY",
            fareBasis: "LEEBFZ0L",
            brandedFare: "AZUL",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "74",
            cabin: "ECONOMY",
            fareBasis: "GEEBFZ0L",
            brandedFare: "AZUL",
            class: "G",
            includedCheckedBags: {
              quantity: 0,
            },
          },
        ],
      },
      {
        travelerId: "3",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "499.34",
          base: "489.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "9",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "10",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            brandedFare: "AZUL",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "73",
            cabin: "ECONOMY",
            fareBasis: "LEEBFZ0L",
            brandedFare: "AZUL",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "74",
            cabin: "ECONOMY",
            fareBasis: "GEEBFZ0L",
            brandedFare: "AZUL",
            class: "G",
            includedCheckedBags: {
              quantity: 0,
            },
          },
        ],
      },
    ],
  },
];

export const mockFlightsTwo = [
  {
    type: "hotel-offers",
    id: "70",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: "2021-03-01",
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: "PT4H5M",
        segments: [
          {
            departure: {
              iataCode: "BSB",
              at: "2021-03-01T09:30:00",
            },
            arrival: {
              iataCode: "SDU",
              at: "2021-03-01T11:15:00",
            },
            carrierCode: "AD",
            number: "4792",
            aircraft: {
              code: "320",
            },
            operating: {
              carrierCode: "AD",
            },
            duration: "PT1H45M",
            id: "9",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SDU",
              at: "2021-03-01T12:30:00",
            },
            arrival: {
              iataCode: "CGH",
              at: "2021-03-01T13:35:00",
            },
            carrierCode: "AD",
            number: "4743",
            aircraft: {
              code: "E95",
            },
            operating: {
              carrierCode: "AD",
            },
            duration: "PT1H5M",
            id: "10",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        duration: "PT4H10M",
        segments: [
          {
            departure: {
              iataCode: "CGH",
              at: "2021-03-05T14:45:00",
            },
            arrival: {
              iataCode: "SDU",
              at: "2021-03-05T15:45:00",
            },
            carrierCode: "AD",
            number: "4744",
            aircraft: {
              code: "E95",
            },
            operating: {
              carrierCode: "AD",
            },
            duration: "PT1H",
            id: "73",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SDU",
              at: "2021-03-05T17:05:00",
            },
            arrival: {
              iataCode: "BSB",
              at: "2021-03-05T18:55:00",
            },
            carrierCode: "AD",
            number: "4796",
            aircraft: {
              code: "320",
            },
            operating: {
              carrierCode: "AD",
            },
            duration: "PT1H50M",
            id: "74",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "1498.02",
      base: "1467.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "98.00",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AD"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "499.34",
          base: "489.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "9",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "10",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            brandedFare: "AZUL",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "73",
            cabin: "ECONOMY",
            fareBasis: "LEEBFZ0L",
            brandedFare: "AZUL",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "74",
            cabin: "ECONOMY",
            fareBasis: "GEEBFZ0L",
            brandedFare: "AZUL",
            class: "G",
            includedCheckedBags: {
              quantity: 0,
            },
          },
        ],
      },
      {
        travelerId: "2",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "499.34",
          base: "489.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "9",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "10",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            brandedFare: "AZUL",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "73",
            cabin: "ECONOMY",
            fareBasis: "LEEBFZ0L",
            brandedFare: "AZUL",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "74",
            cabin: "ECONOMY",
            fareBasis: "GEEBFZ0L",
            brandedFare: "AZUL",
            class: "G",
            includedCheckedBags: {
              quantity: 0,
            },
          },
        ],
      },
      {
        travelerId: "3",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "499.34",
          base: "489.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "9",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "10",
            cabin: "ECONOMY",
            fareBasis: "KEEBFZ0L",
            brandedFare: "AZUL",
            class: "K",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "73",
            cabin: "ECONOMY",
            fareBasis: "LEEBFZ0L",
            brandedFare: "AZUL",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
          },
          {
            segmentId: "74",
            cabin: "ECONOMY",
            fareBasis: "GEEBFZ0L",
            brandedFare: "AZUL",
            class: "G",
            includedCheckedBags: {
              quantity: 0,
            },
          },
        ],
      },
    ],
  },
];
