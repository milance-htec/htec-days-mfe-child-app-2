import React, { useEffect, useState } from 'react';
import { useMnM } from '@mnm-tech/provider';
import { random } from 'lodash';

import 'App.scss';

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

  return (
    <>
      <span className="mfe-child-app-2__heading">Child App #2</span>
      <div className="mfe-child-app-2">
        <div>{`Generated item is: ${randomNumber}`}</div>
      </div>
    </>
  );
}

export default App;
