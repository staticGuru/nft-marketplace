import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./modalStyles.css";
import { ReactPortal } from "./ReactPortals";

function Modal({ children, isOpen, handleClose }) {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <div className="relative">
            <button onClick={handleClose} className="absolute z-10 top-5 right-5 text-white">
              Close
            </button>
            <div>{children}</div>
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}
export default Modal;
