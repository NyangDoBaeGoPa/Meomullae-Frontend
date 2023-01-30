import Link from 'next/link';

export const MainChooseFlow = () => {
  return (
    <div className="relative mt-4 text-center">
      <Link href="">
        <button className="inline-block bg-[#FFF7CB] hover:bg-yellow-300 rounded-[20px] text-center w-[350px] h-[115px] min-h-[20vh] md:w-[46vw] md:h-[36vh] shadow-md border-none m-1">
          <span className="text-[18px] md:text-[30px] font-bold p-4">
            Flow 1: 한양대 주변 메뉴별 맛집 추천
          </span>
          <br></br>
          <div className="text-[14px] md:text-[20px] pt-4">
            지금 뭘 먹을지 고민이신가요? 머물래가 추천해드려요!
          </div>
        </button>
      </Link>

      <Link href="survey">
        <button className="inline-block bg-[#FFF7CB] hover:bg-yellow-300 rounded-[20px] text-center w-[350px] h-[115px] min-h-[20vh] md:w-[46vw] md:h-[36vh] shadow-md border-none m-1">
          <span className="text-[18px] md:text-[30px] md:mb-3 font-bold p-4">Flow 2: MBTI</span>
          <br></br>
          <div className="text-[14px] md:text-[20px] pt-4">
            나의 MBTI와 어울리는 음식은 뭘까? 음식궁합은?!
          </div>
        </button>
      </Link>
    </div>
  );
};
