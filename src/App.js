// import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Image from './component/Image';

function App() {
  return (
    <div id='box'>
      <h2>CINEMA</h2>
      <div id='imgwrap'>
        <h3> &#8251; 영화를 선택해 주세요 &#8251;</h3>
        <Image />
      </div>
    </div>
  );
}

export default App;
