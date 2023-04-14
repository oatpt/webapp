import React, { useState } from 'react';
import ChildComponent from './child';

function ParentComponent() {
  const [message, setMessage] = useState('');

  const handleMessageFromChild = (msg) => {
    setMessage(msg);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child Component: {message}</p>
      <ChildComponent onMessage={handleMessageFromChild} />
    </div>
  );
}

export default ParentComponent;
