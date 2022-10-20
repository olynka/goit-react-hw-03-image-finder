import React from "react";
import { Modal } from "components/Modal/Modal";
import { ImageGalleryItemImage, ImageGalleryItems } from "./ImageGalleryItemStyled";
import PropTypes from 'prop-types';

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



ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};