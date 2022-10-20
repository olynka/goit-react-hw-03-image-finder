import React from "react";
 import  {  ToastContainer ,  toast  }  from  'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css';
import {
    Header,
    Form,
    SearchFormButton,
    SearchFormInput
  
} from 'components/Searchbar/SearchbarStyled';
import { FaSearch } from "react-icons/fa";

export default class SearchbarForm extends React.Component{
    state = {
        searchName:''
    }
    handleInputChange = (e) => {
          const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        
        if(this.state.searchName.trim() === '') {
        toast.error('Please enter a word to search for images!')
      return;
    }

        this.props.onSubmit(this.state.searchName);
          this.resetForm();
    }
        resetForm = () => {
            this.setState({ searchName:''})
            
  }

render(){
    return (
        <Header >
  <Form onSubmit={this.handleSubmit}>
    <SearchFormButton type="submit" >
    <FaSearch fontSize={18}/>
    </SearchFormButton>

    < SearchFormInput
     autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.searchName}
      onChange={this.handleInputChange}
      name='searchName'
          />
      <ToastContainer autoClose={3000} theme={'colored'}
        />
  </Form>
</Header>
    )
}
    
}