import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GraphicComponent from '@components/GraphicComponent/GraphicComponent';
import ButtonsArea from '@components/ButtonsArea';

const addresses = [
  'https://rcslabs.ru/ttrp1.json',
  'https://rcslabs.ru/ttrp2.json',
  'https://rcslabs.ru/ttrp3.json',
  'https://rcslabs.ru/ttrp4.json',
  'https://rcslabs.ru/ttrp5.json',
];

export type TricolorColumn = {
  front: number;
  back: number;
  db: number;
};
export type State = {
  title: string;
  dev: TricolorColumn;
  test: TricolorColumn;
  prod: TricolorColumn;
  norm: number;
};

function App() {
  const [state, setState] = useState<State>({
    title: '',
    dev: { front: 0, back: 0, db: 0 },
    test: { front: 0, back: 0, db: 0 },
    prod: { front: 0, back: 0, db: 0 },
    norm: 0,
  });
  const [loaded, setLoaded] = useState<boolean>(false);
  const [addressNumber, setAddressNumber] = useState<number | null>(null);
  useEffect(() => {
    if (addressNumber !== null) {
      fetch(addresses[addressNumber])
        .then((response) => response.json())
        .then((json) => {
          setState(json);
          setLoaded(true);
        });
    }
  }, [addressNumber]);

  return (
    <>
      {loaded && <GraphicComponent state={state} />}
      {!addressNumber && !loaded && (
        <ButtonsArea setAddressNumber={setAddressNumber} />
      )}
    </>
  );
}

export default App;
