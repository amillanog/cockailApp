import { MainModal } from "./StyledModal";

const Modal = (props) => {
  const { isOpen, closeModal, children, title, className } = props;

  const handleModalContenClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen ? (
        <MainModal
          className={`${className} ${isOpen && "modal-open"}`}
          onClick={closeModal}
        >
          <div className="modal-conten " onClick={handleModalContenClick}>
            <div className="modalHeader">
              <p className="title-header">{title}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="close"
                onClick={closeModal}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="bodyModal scroll">{children}</div>
          </div>
        </MainModal>
      ) : null}
    </>
  );
};

export default Modal;
