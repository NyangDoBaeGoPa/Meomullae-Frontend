import Link from 'next/link';

export const MainChooseFlow = () => {
  return (
    <div className="relative mt-4 text-center">
      <Link href="">
        <button className="inline-block bg-[#FFE7A9] hover:bg-yellow-300 m-1 rounded-xl p-6 text-center w-11/12 h-fit min-h-[20vh] md:w-[47vw] md:h-[36vh] border-none">
          <span className="text-[20px] md:text-[30px] font-bold p-4">Flow 1: Food details</span>
          <br></br>
          <div className="text-[12px] md:text-[20px]">
            지금 뭐 먹을지 고민하시는 분! 머물래가 추천해드려요!
          </div>
        </button>
      </Link>

      <Link href="survey">
        <button className="inline-block bg-[#FFE7A9] hover:bg-yellow-300 m-1 rounded-xl p-6 text-center w-11/12 h-fit min-h-[20vh] md:w-[47vw] md:h-[36vh] border-none">
          <span className="text-[20px] md:text-[30px] font-bold p-4">Flow 2: MBTI</span>
          <br></br>
          <div className="text-[12px] md:text-[20px]">
            내 성격과 비슷한 음식은 뭘까? 날 음식으로 표현해봐요!
          </div>
        </button>
      </Link>
    </div>
  );
};
