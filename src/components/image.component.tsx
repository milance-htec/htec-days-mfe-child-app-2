import React, { FunctionComponent } from 'react';

import 'App.scss';

export interface ImageProps {
  src: string;
}

export const Image: FunctionComponent<ImageProps> = ({ src, children }) => {
  return (
    <img className="mfe-child-app-2__image-component" src={src}>
      {children}
    </img>
  );
};

export default Image;
