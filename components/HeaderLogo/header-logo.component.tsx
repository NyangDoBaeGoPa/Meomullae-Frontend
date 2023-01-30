import Link from 'next/link';

export const HeaderLogo = () => {
  return (
    <Link href="./Mainhome">
      <div className="flex content-center bg-[#A1C4DD] w-full h-[50px] min-h-fit">
        <img src="./images/TeamLogo.png" className="m-auto h-[80%]" />
      </div>
    </Link>
  );
};
