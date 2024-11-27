import TricolorBar from '@components/TricolorBar/TricolorBar';
import StripedBar from '@components/StripedBar/StripedBar';
import { State } from '@src/App';
import classes from '@components/GraphicComponent/GraphicComponent.module.css';
import Legend from '@components/Legend/Legend';

export default function GraphicComponent({ state }: { state: State }) {
  const minHeight = 14;
  const column1 = state.dev.front + state.dev.back + state.dev.db;
  const column2 = state.test.front + state.test.back + state.test.db;
  const column3 = state.prod.front + state.prod.back + state.prod.db;
  const column4 = state.norm;
  const maxColumn = Math.max(column1, column2, column3, column4);
  const k = 255 / maxColumn;
  const height1 = k * column1;
  const height2 = k * column2;
  const height3 = k * column3;
  const height4 = k * column4;

  return (
    <>
      <div className={classes.component}>
        <h1>{state.title}</h1>
        <div className={classes.graphicArea}>
          <TricolorBar
            value1={state.dev.front}
            value2={state.dev.back}
            value3={state.dev.db}
            height1={state.dev.front * k}
            height2={state.dev.back * k}
            height3={state.dev.db * k}
            name='dev'
          />
          <TricolorBar
            value1={state.test.front}
            value2={state.test.back}
            value3={state.test.db}
            height1={state.test.front * k}
            height2={state.test.back * k}
            height3={state.test.db * k}
            name='test'
          />
          <TricolorBar
            value1={state.prod.front}
            value2={state.prod.back}
            value3={state.prod.db}
            height1={state.prod.front * k}
            height2={state.prod.back * k}
            height3={state.prod.db * k}
            name='prod'
          />
          <StripedBar
            value={state.norm}
            height={state.norm * k}
            name='норматив'
          />
        </div>
        <Legend />
      </div>
    </>
  );
}
