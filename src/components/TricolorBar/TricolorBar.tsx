import classes from '@components/tricolorBar/tricolorBar.module.css';

export default function TricolorBar({
  value1,
  value2,
  value3,
  height1,
  height2,
  height3,
  name,
}: {
  value1: number;
  value2: number;
  value3: number;
  height1: number;
  height2: number;
  height3: number;
  name: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className={classes.column}>
        <div className={''}>
          <div className={classes.color1} style={{ height: `${height1}px` }}>
            <div className={classes.height}>
              <p className={classes.text}>{value1}</p>
            </div>
          </div>
          <div className={classes.color2} style={{ height: `${height2}px` }}>
            <div className={classes.height}>
              <p className={classes.text}>{value2}</p>
            </div>
          </div>
          <div className={classes.color3} style={{ height: `${height3}px` }}>
            <div className={classes.height}>
              <p className={classes.text}>{value3}</p>
            </div>
          </div>
        </div>
      </div>
      <p>{name}</p>
    </div>
  );
}
