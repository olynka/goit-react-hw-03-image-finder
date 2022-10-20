import { Component } from "react"
import { LoginForm } from "./SearchbarFormik/Searchbar"
import SearchbarForm from "./Searchbar/Searchbar"
import Info from "./ImageGallery/ImageGallery"
import { Modal } from "./Modal/Modal"


export class App extends Component  {
  state = {
    searchName: '',
      showModal: false,
    
  }
  hendleFormSubmit = searchName=> {
  this.setState({searchName});
  }

      toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    };
  render() {
    return (
    <div>
        <SearchbarForm onSubmit={this.hendleFormSubmit} />
       
        <Info searchName={this.state.searchName} />
       {/* <button type="button" onClick={this.toggleModal} ></button>
                   {this.state.showModal && < Modal />} */}
      
         </div>
    )
  }
};
