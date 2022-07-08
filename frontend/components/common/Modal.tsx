import { MouseEvent, useEffect, useState } from "react";

import { useModal } from "../../store/useModal";

export default function Modal() {
  const modalIsVisible = useModal((state) => state.modalState);
  const modalContent = useModal((state) => state.modalContent);
  const hideModal = useModal((state) => state.hideModal);

  const [shouldRender, setShouldRender] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (modalIsVisible) {
      setShouldRender(true);
      setTimeout(() => setFade(true), 100);
    } else {
      setFade(false);
      setTimeout(() => setShouldRender(false), 100);
    }
  }, [modalIsVisible]);

  const handleModalBgClick = () => {
    setFade(false);
    setTimeout(hideModal, 100);
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return shouldRender ? (
    <div
      className={`z-10 fixed bottom-0 left-0 w-full h-full flex items-center justify-center bg-bg/60 transition-all
      ${
        fade
          ? "backdrop-blur-lg opacity-100  translate-x-0"
          : "backdrop-blur-0 opacity-0 translate-y-4"
      }`}
      onClick={handleModalBgClick}
    >
      <div
        className="z-20 flex justify-center items-center p-5 bg-card rounded-md outline outline-1 outline-primary-border"
        onClick={(e) => handleModalClick(e)}
      >
        {modalContent}
      </div>
    </div>
  ) : null;
}
