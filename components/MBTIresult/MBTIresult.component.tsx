export const MBTIresult = () => {
  return (
    <>
      <div className="flex flex-col h-[100vh] w-full bg-[#FFF]">
        <div className="flex flex-col h-[380px] w-[calc(100%-20px)] items-center mx-[10px] mt-[10px] bg-[#C4E6FF] rounded-[20px] shadow-md">
          <p className="flex h-[40px] w-[cal(100%-90px)] mx-[45px] my-[10px] justify-center items-center text-center text-[15px] font-bold">
            MBTI 결과에 따라 나온 음식 설명입니다.
          </p>
          <div className="flex h-[100px] w-[150px] rounded-[30px] bg-[#A8A8A8]">
            <img
              src="./images/blacktigerShrimp.jpg"
              className="w-[100%] object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
