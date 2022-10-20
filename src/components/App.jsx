import { Component } from "react"
import SearchbarForm from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { fetchImage } from "./Fetch/Fetch"
import { Button } from "./Button/Button"
import { Div } from "./Boxstyled"



export class App extends Component  {
  state = {
    searchName: '',
    showModal: false,
    page: 1,
    isLoading: false,
    images: [],
  }


  hendleFormSubmit = searchName=> {
  this.setState({searchName,});
  }
  async componentDidUpdate(_, prevState) {
    const { searchName,page }=this.state
       if (prevState.searchName !== searchName ||
         page !== prevState.page) {
          this.setState({isLoading: true});
         await fetchImage(page, searchName)
           .then(images => this.setState({ images: images.hits }))
           .catch(error => this.setState({ error,isLoading: false, }));
         
        }
   }

    loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
    <Div>
        <SearchbarForm onSubmit={this.hendleFormSubmit} />
       
        <ImageGallery images={this.state.images} />
         {this.state.images.length > 0 && <Button handleClick={this.loadMore} />}
         </Div>
    )
  }
};
