import axios from "axios";
import  { Component } from "react";
import { Navigate } from 'react-router-dom';



class Edit extends Component {
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            title: '',
            text: '',
            date: ''
            
        }
    }

    componentDidMount() {
        const id = window.location.href;
        const splitString = id.split("/");
        const ID = splitString[splitString.length-1];
        
         axios.get('http://localhost/ReactPHPCRUD/getbyid.php?id='+ID)
         .then(response => {
             this.setState({
                 title: response.data.title,
                 text: response.data.text,
                 date: response.data.date });
             })
             .catch(function (error) {
                 console.log(error)
             })
              
         }
 

    onChangeTitle(e) {
        this.setState({
            title: e.target.value  
        });
    }
    onChangeText(e) {
        this.setState({
            text: e.target.value  
        })
    };
    onChangeCategory(e) {
        this.setState({
            category: e.target.value  
        })
    }

    onSubmit(e) {
        const id = window.location.href;
        const splitString = id.split("/");
        const ID = splitString[splitString.length-1];
        e.preventDefault();
        
        const obj = {
            id: ID,
            title: this.state.title,
            text: this.state.text,
            date: this.state.date
            
    };
    
       console.log(obj);
       
      

    axios.post('http://localhost/ReactPHPCRUD/update.php?id='+ID, obj)
    .then(res => console.log(res.data),
    this.setState({ redirect: true })
    );
}
    
    render() { 
        return ( 
            <div style={{marginTop: 10}}>
            <h3>Edit Post</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title: </label>
                    <input type="text" className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle} required/>
                </div>
                <div className="form-group">
                    <label>Post: </label>
                    <input type="text" className="form-control"
                    value={this.state.text}
                    onChange={this.onChangeText} required/>
                </div>
                <div className="form-group">
                    <label>Category: </label>
                    <label>
         
          <select value={this.state.category} onChange={this.onChangeCategory}>
            <option value="cat 1">cat 1</option>
            <option value="cat 2">cat 2</option>
            <option value="cat 3">cat 3</option>
            <option value="cat 4">cat 4</option>
          </select>
        </label>
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Post" className="btn btn-primary"/>
                </div>
            </form>
        </div>
         );
    }
    
}
 
export default Edit;