import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class Records extends Component {
    constructor(props){
        super(props);   
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
                   <Link to={"/viewpost/"+this.props.obj.id} className="btn btn-primary">View Post</Link>
                </td>
            </tr>
        );
    }
}
 
export default Records;