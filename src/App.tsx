import React, { useEffect, useState } from 'react';
import { useMnM } from '@mnm-tech/provider';
import { LinearProgress } from '@material-ui/core';
import { random } from 'lodash';

import 'App.scss';

//@ts-ignore
const Input = React.lazy(() => import('mnmMfeChildApp1/components/Input'));

function App() {
  const { itemList = [] } = useMnM();

  return (
    <>
      <span className="mfe-child-app-2__heading">Child App #2</span>

      <React.Suspense fallback={<LinearProgress />}>
        <Input />
      </React.Suspense>

      <div className="mfe-child-app-2">
        {itemList.map((item: string, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
}

export default App;
