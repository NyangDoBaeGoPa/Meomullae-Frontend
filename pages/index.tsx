import 'tailwindcss/tailwind.css';
import { HeaderLogo, MainChooseFlow, MainInformation } from '@/components';

export default function Mainhome() {
  return (
    <>
      <HeaderLogo />
      <MainInformation />
      <MainChooseFlow />
    </>
  );
}
