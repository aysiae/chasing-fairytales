import React, {useState} from 'react';
import './navigation.scss'



export default function Nav() {


  return (
    <div id='nav'>
      <span>
        <h3>Home</h3> 
        <h3>Characters</h3>
        <h3>Places</h3>
        <h3>Scenes</h3>
      </span>
    </div>
  );
}