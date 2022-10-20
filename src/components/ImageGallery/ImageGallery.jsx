import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGallerySteled } from "./ImageGalleryStyled";



export const ImageGallery = ({ images }) => {
    
    return (
         <ImageGallerySteled>
            {images.map(image => (
                <ImageGalleryItem 
                    key={image.id} 
                        image = { image.webformatURL }
                        text = { image.tags }
                        imageLarge = { image.largeImageURL }  />
                ))}
                    </ImageGallerySteled>
    )
}

   
   




// import React from "react";
// import { searchImage } from "components/Fetch/Fetch";
// import { Loader } from "components/Loader/Loader";
// import { ToastContainer, toast } from 'react-toastify';
// import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
// import { ImageGallery } from "./ImageGalleryStyled";
// import { Button } from "components/Button/Button";
// import { Modal } from "components/Modal/Modal";








// export default class Info extends React.Component {
//     state = {
//         searchName: '',
//         page: 1,
//         images: [],
//         isLoading: false,
//         error: null,
//         status: 'idle',
//         showModal:false,
//     }
//     // idle режим простоя
//     // pending загружається
//     // rejectad -відхилений
//     // resolved-вирішено


//     componentDidUpdate(prevProps, preState) {
     
//         if (prevProps.searchName !== this.props.searchName) {
//             this.setState({ status: 'pending', page: 1 });
//             // fetch(`https://pixabay.com/api/?key=29705426-bfa25e249bc10439228dcaa9b&q=${this.props.searchName}&images_type=photo`)
//             searchImage(this.props.searchName)
//                 .then(images => this.setState({ images: images.hits, status: 'resolved' }))
//                 .catch(error => this.setState({ error, status: 'rejected' }));
//         }
//     }
//     loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//     };
//     loggleModal = () => {
//         this.setState(state => ({
//             showModal: !state.showModal
//         }))
//     }
    



//     render() {
//         const { isLoading, error, status,images,showModal} = this.state;
//         if (status === 'pending') {
//             return <Loader />
//         }
//         if (status === 'rejected') {
//             return toast.error(
//                 `Something wrong! :( Please, try again later. ${error.message}`)
//         }
//         if (status === 'resolved') {
//             return (
//                 <>
//                 <ImageGallery>
//             {images.map(image => (
//                 <ImageGalleryItem onClick={this.toggleModal}
//                     key={image.id} 
//                         image = { image.webformatURL }
//                         text = { image.tags }
//                         imageLarge = { image.largeImageURL }  />
//                 ))}
//                     </ImageGallery>
                
                    
//                     </>)
            
//     }
//         }
// }
