// server/api/cryptoWallet.js



const myCriptosAmount= [
 {
    "id": 1,
    "name": "Bitcoin",
    "amount": 2
  },
 {
    "id": 2,
    "name": "Ethereum",
    "amount": 2000
  },
{
    "id": 3,
    "name": "Solana",
    "amount": 150
  },
{
    "id": 4,
    "name": "Ripple",
    "amount": 300
  },
  {
    "id": 5,
    "name": "Tether",
    "amount": 200
  }
];

export default defineEventHandler((event) => {
  return myCriptosAmount;
});
