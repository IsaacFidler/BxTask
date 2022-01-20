import React, { useCallback, useState } from 'react';
//styles
import './App.scss';

//components
import Header from './components/Header';
import List from './components/List';

function App() {
  const [selectedData, setSelectedData] = useState<string>('');

  const handleCheck = useCallback((event: any, index: any) => {
    if (event.target.checked) {
      index = String(index);
      setSelectedData(index);
    } else {
      index = '-' + String(index);
      setSelectedData(index);
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <List handle={handleCheck} />
    </div>
  );
}

export default App;
