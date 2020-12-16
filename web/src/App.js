import React, { useState } from 'react'; 
import logo from './logo.svg';

import PromotionCard from './components/Promotion/Card/Card';

const App = () => {
  


  return (
    <div className="App" style={{ 
      maxWidth: 800,
      margin: '30px auto'
       }}>     
      <PromotionCard promotion={promotion} />
    </div>
  );
}

export default App;
