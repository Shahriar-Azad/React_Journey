import React, { useState } from 'react';

export default function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        {open ? 'Hide' : 'Show'} Details
      </button>
      {open && <p>This is some hidden content shown on click.</p>}
    </div>
  );
}


