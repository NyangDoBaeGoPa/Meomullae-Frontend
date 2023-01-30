import Image from 'next/image';
import { useState, useCallback } from 'react';

import { MainChooseFlow } from '../MainChooseFlow';
import ModalInformation from '../MainInformationModal/main-information-modal.component';

export const MainInformation = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  return (
    <>
      <div className="bg-[#C4E6FF] text-center font-sans w-screen h-[calc(100vh-50px)]">
        <div className="text-[24px] md:text-[40px] font-bold pt-6">
          머물래에 오신 것을 환영합니다
        </div>
        <div className="text-[16px] md:text-[20px] p-4">
          상황에 맞는 배달음식을 추천해주는, 머물래
        </div>
        <span className="absolute">
          <Image src="/Donut Bubble.svg" alt="도넛" width="300" height="300" />
        </span>
        <div className="m-auto">
          <div className="text-[10px] absolute top-[200px] left-[120px]">
            머물래는 간단한 설문을 통해
            <br></br>
            <b>취향과 상황에</b> 맞는{' '}
            <b>
              한양대 근처의
              <br></br>배달음식을 추천
            </b>
            해드려요.
            <br></br>이를 통해 머물래는 여러분의...
          </div>
          <Image src="/Icon.png" alt="icon" width="230" height="180" onClick={onClickToggleModal} />
        </div>
        {isOpenModal && (
          <ModalInformation onClickToggleModal={onClickToggleModal}>
            <div className="text-[16px]">
              머물래는 간단한 설문을 통해
              <br></br>
              <b>취향과 상황에</b> 맞는{' '}
              <b>
                한양대 근처의
                <br></br>배달음식을 추천
              </b>
              해드려요.
              <br></br>
              <br></br>이를 통해 머물래는 여러분의
              <br></br>
              <b>메뉴선정 시간단축</b>에 도움을
              <br></br>드리고자 만들게 되었어요.
              <br></br>
              <br></br>또한, 재밌게 즐기실 수 있도록
              <br></br>
              <b>MBTI 테스트</b>를 준비해보았어요.
              <br></br>
              <br></br>12가지 질문에 답을 하면
              <br></br>자신의 MBTI를{' '}
              <b>
                음식으로 표현한
                <br></br>결과
              </b>
              를 받아보실 수 있답니다 :)
              <br></br>
              <br></br>친구와 공유하며 즐거운
              <br></br>시간을 보내시길 바라요!
              <br></br>
              <b>머물래에서 머물래?</b>
            </div>
          </ModalInformation>
        )}
        <MainChooseFlow />
      </div>
    </>
  );
};
