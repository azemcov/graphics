import arrow2 from '@src/assets/arrow2.svg';

export default function ArrowComponent({
  column1,
  column2,
  column3,
}: {
  column1: number;
  column2: number;
  column3: number;
}) {
  return (
    <>
      <svg width='500' height='368' style={{ position: 'absolute', zIndex: 1 }}>
        <line
          x1='62.5'
          y1={368 - column1 - 35}
          x2='62.5'
          y2='0'
          stroke='#898290'
          strokeWidth='1px'
        />
        <line
          x1='62.5'
          y1='0'
          x2='177.5'
          y2='0'
          stroke='#898290'
          strokeWidth='2px'
        />
        <line
          x1='177.5'
          y1='0'
          x2='177.5'
          y2={368 - column2 - 35}
          stroke='#898290'
          strokeWidth='1px'
        />
        <line
          x1='197.5'
          y1={368 - column2 - 35}
          x2='197.5'
          y2='0'
          stroke='#898290'
          strokeWidth='1px'
        />
        <line
          x1='197.5'
          y1='0'
          x2='302.5'
          y2='0'
          stroke='#898290'
          strokeWidth='2px'
        />
        <line
          x1='302.5'
          y1='0'
          x2='302.5'
          y2={368 - column3 - 35}
          stroke='#898290'
          strokeWidth='1px'
        />
      </svg>
      <img
        src={arrow2}
        alt='arrow'
        style={{
          position: 'absolute',
          transform: 'translate(50%, -100%)',
          top: `${255 - column2 - 10}px`,
          right: `${322.5}px`,
          height: '4px',
          width: '7px',
        }}
      />
      <img
        src={arrow2}
        alt='arrow'
        style={{
          position: 'absolute',
          transform: 'translate(50%, -100%)',
          top: `${255 - column3 - 10}px`,
          right: `197.5px`,
          height: '4px',
          width: '7px',
        }}
      />
    </>
  );
}
