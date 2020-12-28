import React, { useEffect, useState } from 'react';
import { useMnM } from '@mnm-tech/provider';
import { LinearProgress } from '@material-ui/core';

import 'App.scss';

//@ts-ignore
const Button = React.lazy(() => import('mnmMfeChildApp1/components/Button'));

function App() {
  const { itemList, setItemList } = useMnM();

  const onItemDelete = (index: number) => {
    const newList = itemList.filter((item, itemIndex) => itemIndex !== index);
    setItemList(newList);
  };

  return (
    <>
      <span className="mfe-child-app-2__heading">Child App #2</span>

      <div className="mfe-child-app-2">
        {itemList.map((item: string, index: number) => (
          <div className="mfe-child-app-2__list-item" key={index}>
            <div className="mfe-child-app-2__list-item--name">{item}</div>
            <Button
              onClick={() => {
                onItemDelete(index);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
