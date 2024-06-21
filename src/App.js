import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = "https://cloud.google.com/ai/gen-app-builder/client?hl=en_US";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Element that opens the widget on click. It does not have to be an input */}
        <input placeholder="Search here" id="searchWidgetTrigger" />
        {/* Search widget element is not visible by default */}
        <gen-search-widget
          configId="91c5f2c9-3161-4ec3-8f95-f0cbf69f9c08"
          triggerId="searchWidgetTrigger">
        </gen-search-widget>
      </header>
    </div>
  );
}

export default App;
