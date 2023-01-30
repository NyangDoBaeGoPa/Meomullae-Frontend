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
      <div
        className="ModalBackGround absolute w-[100vw] h-[100vh] bg-black/30"
        onClick={onClickToggleModal}
      >
        <div className=" w-[90vw] md:w-[50vw] m-auto mt-24 h-[70vh] md:h-[30vh] flex flex-col justify-center items-center rounded-3xl bg-white shadow-lg relative">
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
