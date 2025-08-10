import React, { useState } from 'react';

const quotes = [
  "Stay hungry, stay foolish.",
  "Simplicity is the ultimate sophistication.",
  "Code is like humor. When you have to explain it, it’s bad."
];

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);
  return (
    <div>
      <p>"{quote}"</p>

    </div>
  );
}
