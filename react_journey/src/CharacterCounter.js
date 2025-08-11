import React, { useState } from 'react';

export default function CharCounter() {
  const [text, setText] = useState('');
  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />

    </div>
  );
}
