import React, { useEffect } from 'react';
import './App.css';

const DialogflowMessenger = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
      />
      <df-messenger
        location="us"
        project-id="nerdery-technology-gen-ai"
        agent-id="4fefaeaa-2695-4bd1-b077-81e9da46b5be"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="Annual Reports Agent"></df-messenger-chat-bubble>
      </df-messenger>
      <style>
        {`
          df-messenger {
            z-index: 999;
            position: fixed;
            bottom: 16px;
            right: 16px;
          }
        `}
      </style>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Other components */}
        <DialogflowMessenger />
      </header>
    </div>
  );
}

export default App;
