import React from "react";
import { Modal } from "components/Modal/Modal";
import { ImageGalleryItemImage,ImageGalleryItems } from "./ImageGalleryItemStyled";

export class ImageGalleryItem extends React.Component{
  state = {
    showModal: false,
    
  };
toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    };

  render() {
    
    const { image, text, imageLarge } = this.props;
    const{showModal} =this.state
    return (
    <div>
        <ImageGalleryItems>
  <ImageGalleryItemImage src={image}
                            alt={text}
            loading="lazy"
            onClick={this.toggleModal}
                           />
        </ImageGalleryItems>
    
        {showModal && <Modal onCloseModal={this.toggleModal }>
          <img src={imageLarge} alt={text}  />
        </Modal>}
           
          
      </div>
     )
}}



