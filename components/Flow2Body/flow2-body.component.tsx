export const Flow2Body = () => {
  return (
    <>
      <div className="h-[75vh] w-[calc(100%-24px)] mx-3 bg-[#C4E6FF] rounded-lg shadow-md">
        <div className="pt-16 text-xl font-bold text-center">질문입니다!</div>
        <div className="text-center bg-[#FFE7A9] hover:bg-yellow-300 w-[calc(100%-48px)] h-[40px] m-auto mt-32 rounded-full p-3 shadow-md">
          답변1
        </div>
        <div className=" bg-[#FFE7A9] hover:bg-yellow-300 w-[calc(100%-48px)] h-[40px] m-auto my-1 rounded-full p-3 text-center shadow-md">
          답변2
        </div>
      </div>
    </>
  );
};
