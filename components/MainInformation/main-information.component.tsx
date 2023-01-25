import { useState, useCallback } from 'react';

import ModalInformation from '../MainInformationModal/main-information-modal.component';

export const MainInformation = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  return (
    <>
      <div className="relative min-h-[40vh] h-fit bg-[#C4E6FF] text-center mx-3 font-sans">
        <div className="text-[25px] md:text-[40px] md:p-16 p-8 font-bold pt-16">
          Welcome to MML!
        </div>
        <div className="text-[8px] md:text-[20px] p-1">
          메뉴 선정에 한 시간 걸리는 당신을 위해 준비했어요!
        </div>
        <div className="text-[8px] md:text-[20px]">상황에 맞는 배달음식을 추천해주는,</div>
        <div className="font-semibold md:text-[25px] text-[8px]">🍴머물래🍴</div>
        <button
          className="border-none bg-[#C4E6FF] hover:bg-blue-500 text-[10px] font-semibold md:text-[25px] m-5"
          onClick={onClickToggleModal}
        >
          👀information
        </button>
        {isOpenModal && (
          <ModalInformation onClickToggleModal={onClickToggleModal}>
            여기에 정보가 들어가용
          </ModalInformation>
        )}
      </div>
    </>
  );
};
