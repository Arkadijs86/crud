import axios from "axios";
import  { Component } from "react";
import { Link, Navigate } from 'react-router-dom';
import Comments from "./Comments";
import Records from "./Records";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: [],
            id:'' };
    }

    componentDidMount() {
        const id = window.location.href;
        const splitString = id.split("/");
        let ID = splitString[splitString.length-1];
        
         axios.get('http://localhost/ReactPHPCRUD/listcoments.php')
         .then(response => {
            this.setState({ posts: response.data.filter(data => data.id == ID)});
            this.setState({ id: ID});
        })
        .catch(function(error) {
            console.log(error);
        })
    }
    postList(){
        return this.state.posts.map(function(object, i){
            return <Comments obj={object} key={i} /> ;  
         });
    }

    

    render() { 
        return ( 
            <div>
                <h3 align="center">Comments</h3>
                <table className="table" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Post</th>
                            <th >Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.postList() }
                    </tbody>
                </table>
                <div>
                   <Link to={"/insertcomments/"+this.state.id} className="btn btn-primary">Add Comment</Link>
                </div>
            </div>
         );
    }
    
}
 
export default Comment;