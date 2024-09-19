import React from 'react';
import './App.css';
import IpsumGenerator from './IpsumGenerator';


function App() {
  const [filter, filterSet] = React.useState("");
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1em",
      }}
    >
      <h1 className="title">pirats arrrgh</h1>

      {/* Render the IpsumGenerator component */}
      <IpsumGenerator />
    </div>
  );
}

export default App;
