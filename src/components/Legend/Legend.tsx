import classes from '@components/Legend/Legend.module.css';

export default function Legend() {
  return (
    <div className={classes.elements}>
      <div className={classes.element}>
        <div className={`${classes.box} ${classes.client}`}></div>
        <p>Клиентская часть</p>
      </div>

      <div className={classes.element}>
        <div className={`${classes.box} ${classes.server}`}></div>
        <p>Серверная часть</p>
      </div>

      <div className={classes.element}>
        <div className={`${classes.box} ${classes.database}`}></div>
        <p>База данных</p>
      </div>
    </div>
  );
}
