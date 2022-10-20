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
      const {image, text, showModal,imageLarge} = this.props;
    return (
    <div>
    <ImageGalleryItems>
  <ImageGalleryItemImage src={image} 
                            alt={text} 
                            loading="lazy"
                            onClick={this.toggleModal}/>
        </ImageGalleryItems>
       <button type="button" onClick={this.toggleModal} ></button>
        {this.state.showModal && < Modal onClick={this.toggleModal}>
      
        </Modal>}</div>
     )
}}