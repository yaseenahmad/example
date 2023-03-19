import React from 'react';
import { TopMenu } from '../components/menus';

const LayoutFull = ({ children }) => {
  return (
    <div>
      <TopMenu />
      <div>{children}</div>
    </div>
  );
}

export default LayoutFull;