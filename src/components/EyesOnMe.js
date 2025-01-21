import React, { useState } from 'react';

function EyesOnMe() {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    console.log("Good!");
    setFocused(true);
  };

  const handleBlur = () => {
    console.log("Hey! Eyes on me!");
    setFocused(false);
  };

  return (
    <button
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;