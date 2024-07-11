import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = "https://cloud.google.com/ai/gen-app-builder/client?hl=en_US";
    script.async = true;
    script.onload = () => {
      // Initialize the widget once the script is loaded
      const genSearchWidget = document.createElement('gen-search-widget');
      genSearchWidget.setAttribute('configId', '91c5f2c9-3161-4ec3-8f95-f0cbf69f9c08');g
      genSearchWidget.setAttribute('triggerId', 'searchWidgetTrigger');
      document.body.appendChild(genSearchWidget);
    };
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
      const widget = document.querySelector('gen-search-widget');
      if (widget) {
        document.body.removeChild(widget);
      }
    };
  }, []);

  return (
    <div className="App">
      <input placeholder="Annual Reports Search Demo" id="searchWidgetTrigger" />
    </div>
  );
}

export default App;
