export default function ButtonsArea({
  setAddressNumber,
}: {
  setAddressNumber: Function;
}) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <button
            type='button'
            className='btn btn-secondary'
            onClick={() => {
              setAddressNumber(i);
            }}>
            {i + 1}
          </button>
        ))}
    </div>
  );
}
