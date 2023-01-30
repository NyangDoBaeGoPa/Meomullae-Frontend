import Link from 'next/link';

export const HeaderLogo = () => {
  return (
    <Link href="./">
      <div className="w-screen text-center bg-[#A1C4DD] h-[50px]">헤더입니다.</div>
    </Link>
  );
};
