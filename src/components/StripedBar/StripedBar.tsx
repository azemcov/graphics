import classes from '@components/StripedBar/StripedBar.module.css';

export default function StripedBar({
  value,
  height,
  name,
}: {
  value: number;
  height: number;
  name: string;
}) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div className={classes.column} style={{ height: `${height}px` }}>
          <div className={classes.textBackground}>
            <p className={classes.text}>{value}</p>
          </div>
        </div>
        <p>{name}</p>
      </div>
    </>
  );
}
