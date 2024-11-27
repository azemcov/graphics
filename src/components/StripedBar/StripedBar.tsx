import classes from '@components/StripedBar/StripedBar.module.css';

export default function StripedBar({ value }: { value: number }) {
  return (
    <>
      <div>
        <p className={classes.StripedBar_text}>text</p>
      </div>
    </>
  );
}
