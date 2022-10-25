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
    per_page: 12
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
    const totalPages = Math.ceil(500 / 12);
    console.log(totalPages);
  
    return (
    <div>
        <SearchbarForm onSubmit={this.hendleFormSubmit} />
       <ToastContainer autoClose={2000} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length >=this.state.per_page && <Button handleClick={this.loadMore}/>}
         </div>
    )
  }
};
