import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

interface Props {
  children: ReactElement;
}

export default function Layout(props: Props) {
  return (
    <div className='container'>
      <Navbar />
      {props.children}
    </div>
  );
}
