import { PropsWithChildren } from 'react';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

export default function MainModalInformation({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <div className="absolute top-0 z-50">
      <div className="ModalBackGround absolute w-[100vw] h-[100vh]">
        <div className=" w-[70vw] md:w-[50vw] m-auto mt-24 h-[50vh] md:h-[30vh] flex flex-col justify-center items-center rounded-3xl bg-white shadow-lg relative">
          <button
            onClick={onClickToggleModal}
            className="absolute px-3 py-1 text-yellow-500 bg-blue-200 border-none rounded-lg shadow-md bottom-5 md:py-3 md:px-6 md:text-sm"
          >
            확인
          </button>
          {children}
        </div>
        <div
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            onClickToggleModal();

            if (onClickToggleModal) {
              onClickToggleModal();
            }
          }}
        ></div>
      </div>
    </div>
  );
}
