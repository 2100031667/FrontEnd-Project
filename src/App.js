// App.js
import React, { useState } from 'react';
import Header from './Header';
import MainBlock from './MainBlock';
import Footer from './Footer';
import { studentData } from './studentData'; // Import the data array
import './App.css'; // Import CSS file for overall app styles

const App = () => {
  const [showStatistics, setShowStatistics] = useState(false);

  const handleToggleStatistics = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div className="App">
      <Header 
        title="Gradebook Project" 
        date="2024-04-08"
        professor="Dr. Smith" 
        college="Example College" 
        department="Computer Science" 
        semester="Spring 2024" 
        group="Group A" 
      />
      <MainBlock studentData={studentData} showStatistics={showStatistics} />
      <div className="statistics-toggle">
        <button onClick={handleToggleStatistics}>
          {showStatistics ? 'Hide Statistics' : 'Show Statistics'}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
