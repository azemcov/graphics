import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GraphicComponent from '@components/GraphicComponent/GraphicComponent';
import ButtonsArea from '@components/ButtonsArea';
import { GraphicState } from '@src/components/GraphicComponent/GraphicComponent';

const addresses = [
  'https://rcslabs.ru/ttrp1.json',
  'https://rcslabs.ru/ttrp2.json',
  'https://rcslabs.ru/ttrp3.json',
  'https://rcslabs.ru/ttrp4.json',
  'https://rcslabs.ru/ttrp5.json',
];

function App() {
  const [state, setState] = useState<GraphicState>({
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
      {loaded && (
        <button
          style={{ position: 'absolute', left: '10px' }}
          type='button'
          className='btn btn-secondary'
          onClick={() => location.reload()}>
          back
        </button>
      )}
    </>
  );
}

export default App;
