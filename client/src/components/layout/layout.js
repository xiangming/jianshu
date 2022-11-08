import React from 'react';
import { Header } from '../header/header';
import './layout.scss';

export const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
