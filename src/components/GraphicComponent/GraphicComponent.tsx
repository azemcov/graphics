import TricolorBar from '@components/TricolorBar/TricolorBar';
import StripedBar from '@components/StripedBar/StripedBar';
import classes from '@components/GraphicComponent/GraphicComponent.module.css';
import Legend from '@components/Legend/Legend';
import dots from '@src/assets/dots.svg';
import { useEffect, useState } from 'react';
import Comparision from '@components/Comparision/Comparision';
import ArrowComponent from '@components/ArrowComponent';

export type TricolorColumn = {
  front: number;
  back: number;
  db: number;
};
export type GraphicState = {
  title: string;
  dev: TricolorColumn;
  test: TricolorColumn;
  prod: TricolorColumn;
  norm: number;
};

export default function GraphicComponent({ state }: { state: GraphicState }) {
  const [k, setK] = useState<number>(0);
  const [noData, setNoData] = useState<boolean>(false);
  const [firstComparison, setFirstComparison] = useState<number>(0);
  const [secondComparison, setSecondComparison] = useState<number>(0);
  useEffect(() => {
    // const minHeight = 14;
    const column1 = state.dev.front + state.dev.back + state.dev.db;
    const column2 = state.test.front + state.test.back + state.test.db;
    const column3 = state.prod.front + state.prod.back + state.prod.db;
    const column4 = state.norm;
    setFirstComparison(column2 - column1);
    setSecondComparison(column3 - column2);
    const maxColumn = Math.max(column1, column2, column3, column4);
    if (maxColumn === 0) {
      setNoData(true);
    }
    setK(255 / maxColumn);
    return () => {};
  }, [state]);

  return (
    <>
      <div className={classes.component}>
        <div className={classes.header}>
          <h1>Количество пройденных тестов {state.title}</h1>
          <img src={dots} alt='***' />
        </div>
        <div className={classes.graphicArea}>
          <TricolorBar
            value1={state.dev.front}
            value2={state.dev.back}
            value3={state.dev.db}
            height1={noData ? 255 / 3 : state.dev.front * k}
            height2={noData ? 255 / 3 : state.dev.back * k}
            height3={noData ? 255 / 3 : state.dev.db * k}
            name='dev'
          />
          {!noData && (
            <ArrowComponent
              column1={k * (state.dev.front + state.dev.back + state.dev.db)}
              column2={k * (state.test.front + state.test.back + state.test.db)}
              column3={k * (state.prod.front + state.prod.back + state.prod.db)}
            />
          )}
          <TricolorBar
            value1={state.test.front}
            value2={state.test.back}
            value3={state.test.db}
            height1={noData ? 255 / 3 : state.test.front * k}
            height2={noData ? 255 / 3 : state.test.back * k}
            height3={noData ? 255 / 3 : state.test.db * k}
            name='test'
          />
          <TricolorBar
            value1={state.prod.front}
            value2={state.prod.back}
            value3={state.prod.db}
            height1={noData ? 255 / 3 : state.prod.front * k}
            height2={noData ? 255 / 3 : state.prod.back * k}
            height3={noData ? 255 / 3 : state.prod.db * k}
            name='prod'
          />
          <StripedBar
            value={state.norm}
            height={noData ? 255 : state.norm * k}
            name='норматив'
          />
          {!noData && (
            <Comparision comparisonNumber={firstComparison} right={375} />
          )}
          {!noData && (
            <Comparision comparisonNumber={secondComparison} right={250} />
          )}
        </div>
        <Legend />
      </div>
    </>
  );
}
