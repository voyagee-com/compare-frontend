export const toCurrency = (number) => {
  const options = { style: "currency", currency: "USD" };
  const convertedCurrency = new Intl.NumberFormat("en-US", options).format(
    number
  );
  return convertedCurrency;
};

export const toHourDisplay = (datetime) => {
  const options = { hour: "2-digit", minute: "2-digit", timeZone: "UTC" };
  const convertedDateTime = new Date(datetime).toLocaleTimeString(
    "en-US",
    options
  );
  return convertedDateTime;
};

export const toDateDisplay = (datetime) => {
  const options = { month: "long", day: "numeric" };
  const convertedDateTime = new Date(datetime).toLocaleDateString(
    "en-US",
    options
  );
  return convertedDateTime;
};