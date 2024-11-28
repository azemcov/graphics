import arrow from '@src/assets/arrow.svg';
import classes from '@components/Comparision/Comparision.module.css';

function comparisonColor(number: number): string {
  if (number > 0) {
    return classes.green;
  } else if (number < 0) {
    return classes.red;
  } else {
    return classes.gray;
  }
}
function comparisonText(number: number): string {
  if (number > 0) {
    return '+' + number;
  } else if (number < 0) {
    return number.toString();
  } else {
    return '0';
  }
}
function comparisonArrow(number: number): string {
  if (number > 0) {
    return classes.greenArrow;
  } else if (number < 0) {
    return classes.redArrow;
  } else {
    return '';
  }
}

export default function Comparision({
  right,
  comparisonNumber,
}: {
  right: number;
  comparisonNumber: number;
}) {
  return (
    <>
      <div
        className={comparisonColor(comparisonNumber)}
        style={{ right: `${right}px` }}>
        {comparisonNumber !== 0 && (
          <img
            className={comparisonArrow(comparisonNumber)}
            src={arrow}
            alt={comparisonNumber > 0 ? 'up' : 'down'}
          />
        )}
        <p style={{ color: '#ffffff', fontSize: '14px', fontWeight: '700' }}>
          {comparisonText(comparisonNumber)}
        </p>
      </div>
    </>
  );
}
