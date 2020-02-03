import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from '../containers/Posts';
import FullPost from '../components/FullPost';
import Wrapper from '../hoComponents/Wrapper'
class Blog extends Component {
  render() {
    return (
      <Wrapper>
        <Route path='/' exact component={Posts} />
        <Route path='/fullPost' component={FullPost} /> 
      </Wrapper>
    );
  }
}
export default Blog;