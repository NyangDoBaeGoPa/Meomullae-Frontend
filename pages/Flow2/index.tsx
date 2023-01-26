import { Flow2Body, GoOrBack, HeaderLogo, LinearProgressWithLabel } from '@/components';

export default function Flow2() {
  return (
    <>
      <HeaderLogo />
      <LinearProgressWithLabel value={33} />
      <Flow2Body />
      <GoOrBack />
    </>
  );
}
