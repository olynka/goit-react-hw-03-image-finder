import { Component } from "react"
import SearchbarForm from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { fetchImage } from "./Fetch/Fetch"
import { Button } from "./Button/Button"
import { toast, ToastContainer } from "react-toastify";



export class App extends Component  {
  state = {
    searchName: '',
    showModal: false,
    page: 1,
    isLoading: false,
    images: [],
  }


  hendleFormSubmit = searchName=> {
    this.setState({
      searchName: searchName,
      images: [],
         page: 1,
    });
    
    
  }
  async componentDidUpdate(_, prevState) {
    const { searchName,page }=this.state
       if (prevState.searchName !== searchName ||
         page !== prevState.page) {
          this.setState({isLoading: true});
         await fetchImage(page, searchName)
           .then(data => {
            return (
              data.hits.length === 0
                ? toast.error('Oops! We did not find any images matching your request. Please try again.')
                : this.setState(prevState => ({
                  images: [...prevState.images, ...data.hits],
                  isLoading: false,
                  }))
                  )
          })
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
    <div>
        <SearchbarForm onSubmit={this.hendleFormSubmit} />
       <ToastContainer autoClose={2000} />
        <ImageGallery images={this.state.images} />
         {this.state.images.length > 0 && <Button handleClick={this.loadMore} />}
         </div>
    )
  }
};
