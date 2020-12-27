import React, { useEffect, useState } from 'react';
import { useMnM } from '@mnm-tech/provider';
import { LinearProgress } from '@material-ui/core';
import { random } from 'lodash';

import 'App.scss';

//@ts-ignore
const Input = React.lazy(() => import('mnmMfeChildApp1/components/Input'));

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

      <React.Suspense fallback={<LinearProgress />}>
        <Input />
      </React.Suspense>

      <div className="mfe-child-app-2">
        <div>{`Generated item is: ${randomNumber}`}</div>
      </div>
    </>
  );
}

export default App;
