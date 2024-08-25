import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/api/message')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>MyBoardingPass</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
