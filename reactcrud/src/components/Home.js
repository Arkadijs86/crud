import axios from "axios";
import { Component } from "react";

import Records from "./Records";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }


    componentDidMount(){
        axios.get('http://localhost/ReactPHPCRUD/list.php')
        .then(response => {
            this.setState({ posts: response.data });
        })
        .catch(function(error) {
            console.log(error);
        })
    }
    postList(){
        return this.state.posts.map(function(object, i){
            return <Records obj={object} key={i} /> ;  
         });
    }

    render() { 
        return ( 
            <div>
                <h3 align="center">Post List</h3>
                <table className="table" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Post</th>
                            <th >Date</th>
                            <th colSpan={"2"}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.postList() }
                    </tbody>
                </table>
            </div>
         );
    }
}

 
export default Home;