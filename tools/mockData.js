const assets = [
  {
    id: "SPY",
    name: "SPDR S&P 500",
    price: 294.94,
    quantity: 20,
  },
  {
    id: "CMCSA",
    name: "Comcast Corporation Class A Common Stock",
    price: 38.09,
    quantity: 20,
  },
  {
    id: "KMI",
    name: "Kinder Morgan Inc.",
    price: 15.49,
    quantity: 20,
  },
  {
    id: "INTC",
    name: "Intel Corporation",
    price: 59.92,
    quantity: 20,
  },
  {
    id: "MU",
    name: "Micron Technology Inc.",
    price: 45.92,
    quantity: 20,
  },
  {
    id: "GDX",
    name: "VanEck Vectors Gold Miners",
    price: 35.93,
    quantity: 20,
  },
  {
    id: "GE",
    name: "General Electric Company",
    price: 6.27,
    quantity: 20,
  },
  {
    id: "BAC",
    name: "Bank of America Corporation",
    price: 22.93,
    quantity: 20,
  },
  {
    id: "EEM",
    name: "iShares MSCI Emerging Index Fund",
    price: 37.44,
    quantity: 20,
  },
  {
    id: "XLF",
    name: "SPDR Select Sector Fund - Financial",
    price: 22.13,
    quantity: 20,
  },
  {
    id: "AAPL",
    name: "Apple Inc.",
    price: 314.96,
    quantity: 20,
  },
  {
    id: "MSFT",
    name: "Microsoft Corporation",
    price: 184.91,
    quantity: 20,
  },
];

const history = [{ id: 1, actionType: "buy", assetId: "MSFT", quantity: 2 }];

const newAsset = {
  id: "",
  name: "",
  price: 0,
  quantity: 0,
};
const newHistoryEvent = { id: 1, actionType: "", assetId: "", quantity: 0 };
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newAsset,
  newHistoryEvent,
  assets,
  history,
};
