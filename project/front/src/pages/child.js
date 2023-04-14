import React, { useState } from 'react';

function ChildComponent(props) {
  const [message, setMessage] = useState('');

  const handleSendToParent = () => {
    props.onMessage(message);
  }

  return (
    <div>
      <h1>Child Component</h1>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSendToParent}>Send Message to Parent</button>
    </div>
  );
}

export default ChildComponent;
