import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Layout from './Layout/Layout.js';

class FullPost extends Component {
    state = {
        loadedPost: null,
        loadUser: null,
        Name:"",
        Website: "",
        error: false,
        id:""
    }
     
      getParameterByName = (name, url) =>{
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g,'\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    componentDidMount()  {

       let id = this.getParameterByName('id',this.props.location.search);
       this.setState({id:id});
       let userId = this.getParameterByName('userId',this.props.location.search);
    //get post details
        if ( id ) {
          if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( 'http://jsonplaceholder.typicode.com/posts/' + id )
                    .then( response => {
                        this.setState({error: false});
                        this.setState( { loadedPost: response.data } );
                    })
                    .catch(error => {
                      console.log( error );
                      this.setState({error: true});
              
                    } );
              } 
        }
    // get writer information
        if ( userId ) {
          axios.get( 'http://jsonplaceholder.typicode.com/users/' + userId )
                    .then( response => {
                        
                        this.setState( { loadUser: response.data } );
                        this.setState({Name:this.state.loadUser.name});
                        this.setState({website:this.state.loadUser.website});
                        
                    } );
           
        }
    }
   
    render () {
        let post = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
          if ( this.state.error === false && this.state.id   ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost && this.state.error === false ) {
            post = (
                <Card className="text-center mx-auto h-100  w-100"  style={{"backgroundColor":"green"}}>
                <Card.Title> {this.state.loadedPost.title}</Card.Title>
                <Card.Body className="p-5" >
                        <Card.Text className="p-5">{this.state.loadedPost.body}
                        </Card.Text>

                </Card.Body>
        </Card>
                
                
            );
        }
      
        return <Layout name={this.state.Name} web={this.state.website}>{post}</Layout> ;
    }
}

export default FullPost;