import React, { useEffect, useState } from 'react';
import { useMnM } from '@mnm-tech/provider';
import { random } from 'lodash';

function App() {
  const { setItemList } = useMnM();

  const [randomNumber, setRandomNumber] = useState(-1);

  const setItemListIntervalHandler = () => {
    setInterval(() => {
      const generatedNumber = random(1, 10);
      setRandomNumber(generatedNumber);
      setItemList([generatedNumber]);
    }, 5000);
    return null;
  };

  useEffect(() => {
    setItemListIntervalHandler();
  }, []);

  return <div>{`Generated item is: ${randomNumber}`}</div>;
}

export default App;
