import { Component } from "react";
import axios from 'axios';
class InsertComments extends Component {
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeText = this.onChangeText.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            title: '',
            text: '',      
        }
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
    
    onSubmit(e) {
        const id = window.location.href;
        const splitString = id.split("/");
        const ID = splitString[splitString.length-1];
        
        const obj = {
            id: ID,
            title: this.state.title,
            text: this.state.text,
            category: this.state.category
        };

        console.log(obj);

        axios.post('http://localhost/ReactPHPCRUD/insertc.php', obj)
        .then(res => console.log(res))
 
        this.setState = ({
            title: '',
            text: '',   
        })     
     } 
       
    render() { 
        return ( 
            <div style={{marginTop: 10}}>
            <h3>Add New Comment</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Your name: </label>
                    <input type="text" className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle} required/>
                </div>
                <div className="form-group">
                    <label>Comment: </label>
                    <input type="text" className="form-control"
                    value={this.state.text}
                    onChange={this.onChangeText} required/>
                </div>  
                <div className="form-group">
                    <input type="submit" value="Add Comment" className="btn btn-primary"/>
                </div>
            </form>
        </div>
         );
    }
}
 
export default InsertComments;