
import { StyledModal, Overlay } from "./ModalStyled";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ imageLarge, text}) => {
  
  return (
          
    <Overlay>
      <StyledModal>
              {this.props.children}
      </StyledModal>
    </Overlay>
    
  );
};
