import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GraphicComponent from '@components/GraphicComponent/GraphicComponent';
import StripedBar from '@components/StripedBar/StripedBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GraphicComponent />
      <StripedBar />
    </>
  );
}

export default App;
