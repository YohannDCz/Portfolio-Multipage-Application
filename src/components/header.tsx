import React from 'react';
import ReactDOM from 'react-dom/client';

export function Header(props: any) {
  return (
    <div className="header">
      <img src="logos/logotype.png" alt="The logotype of the page." />
      <div className="sections">
        <p>HOME</p>
        <p>PROJECTS</p>
        <p>STACK</p>
        <p>CONTACT</p>
      </div>
    </div>
  )
}