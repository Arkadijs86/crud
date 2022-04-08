import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class RecordsList extends Component {
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this); 
          
    }

    delete(){
             axios.get('http://localhost/ReactPHPCRUD/delete.php?id='+this.props.obj.id)
            .then(
                window.location.reload(false)
            )
            .catch(err => console.log(err))
    }
    
    render() { 
        
        return (
            <tr>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.text}
                </td>
                <td>
                    {this.props.obj.date}
                </td>
                <td>
                   <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
 
export default RecordsList;