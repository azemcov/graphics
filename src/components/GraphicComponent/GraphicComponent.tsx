import TricolorBar from '@components/TricolorBar/tricolorBar';
import StripedBar from '@components/StripedBar/StripedBar';

export default function GraphicComponent() {
  return (
    <>
      <h1>h1 text</h1>
      <TricolorBar value={123} />
      <StripedBar value={456} />
      <p>p text</p>
    </>
  );
}
