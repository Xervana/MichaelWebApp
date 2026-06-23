// Shared product catalogue used by the homepage Explore sections and the /kiosk page.

export const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=80`;

export const ACCOUNTS = {
  Savings: [
    {
      title: "Basic Account",
      desc: "An easy-to-open account that requires no initial deposit and maintaining balance.",
      photo: "photo-1512941937669-90a1b58e7e9c",
      alt: "Mobile banking on a phone",
    },
    {
      title: "ATM Savings",
      desc: "Comes with a BDC Debit Card that lets you withdraw cash from ATMs, enjoy cashless transactions, or transfer funds online.",
      photo: "photo-1483985988355-763728e1935b",
      alt: "Shopping with a debit card",
    },
    {
      title: "Passbook Savings",
      desc: "Enjoy the benefits of an interest-earning account and easily keep track of your savings with a passbook.",
      photo: "photo-1454165804606-c3d57bc86b40",
      alt: "Tracking savings",
    },
  ],
  Checking: [
    {
      title: "Checking Account",
      desc: "Manage your everyday cash flow with a reliable checking account and easy fund access.",
      photo: "photo-1450101499163-c8848c66ca85",
      alt: "Writing a cheque",
    },
    {
      title: "Payroll Account",
      desc: "Receive your salary seamlessly with a no-maintaining-balance payroll account.",
      photo: "photo-1554224155-6726b3ff858f",
      alt: "Managing payroll finances",
    },
  ],
};

export const CARDS = [
  {
    title: "Mastercard",
    desc: "BDC Mastercard makes every moment special, anywhere in the world.",
    photo: "photo-1556742049-0cfed4f6a45d",
    alt: "Mastercard credit cards",
  },
  {
    title: "Visa",
    desc: "Get the confidence of worldwide recognition and enjoy convenience and reliability with every purchase.",
    photo: "photo-1563013544-824ae1b704d3",
    alt: "Visa credit card",
  },
  {
    title: "American Express®",
    desc: "Experience world-class privileges with American Express Cards.",
    photo: "photo-1542435503-956c469947f6",
    alt: "American Express card payment",
  },
];

export const LOANS = [
  {
    title: "Auto Loan",
    desc: "Drive your new car with low rates and fast approval.",
    photo: "photo-1503376780353-7e6692767b70",
    alt: "New car",
  },
  {
    title: "Home Loan",
    desc: "Take the first step to your new home.",
    photo: "photo-1564013799919-ab600027ffc6",
    alt: "New home",
  },
  {
    title: "Multipurpose Loan",
    desc: "Carry on with your plans — use your property to fund your various needs.",
    photo: "photo-1556745757-8d76bdb6984b",
    alt: "Small business owner",
  },
  {
    title: "Personal Loan",
    desc: "Stop worrying and bring your plans to life.",
    photo: "photo-1573497019940-1c28c88b4f3e",
    alt: "Person planning at a laptop",
  },
];
