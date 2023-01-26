import { Flow2Body, HeaderLogo, LinearProgressWithLabel } from '@/components';

export default function Flow2() {
  return (
    <>
      <HeaderLogo />
      <LinearProgressWithLabel value={33} />
      <Flow2Body />
    </>
  );
}
