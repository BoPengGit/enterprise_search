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
      genSearchWidget.setAttribute('configId', '187c75f0-2ad9-4ac0-ac63-ce8f48af32c9');
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
