import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class Comments extends Component {
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
                
            </tr>
        );
    }
}
 
export default Comments;