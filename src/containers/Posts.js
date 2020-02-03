import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import FullPost from '../components/FullPost';
import Layout from '../components/Layout/Layout.js';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Wrapper from '../hoComponents/Wrapper';
class Posts extends Component {
  state = {
    posts: [],
    error: false,
  }
  componentDidMount() {
    // get list of posts
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({error: false});
        const posts = response.data;
        this.setState({ posts: posts });

      })
      .catch(error => {
        console.log( error );
        this.setState({error: true});

      });
  }
  handlePageChange(pageNumber) {

    this.setState({ activePage: pageNumber });
  }
  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

    // pagination
    const columns = [{
      dataField: 'id',
      text: '',
      formatter: (cell, row, rowIndex, extraData) => (
        <Link to={{ pathname: '/fullPost', search: 'id=' + row.id + '&userId=' + row.userId }}>
          {row.title}
        </Link>
      )
    }];
    const customTotal = (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} Results
            </span>
    );

    const options = {
      paginationSize: 4,
      pageStartIndex: 0,
      alwaysShowAllBtns: true,
      hideSizePerPage: true,
      showTotal: false,
      paginationTotalRenderer: customTotal,
      sizePerPageList: [{
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: 'All', value: this.state.posts.length
      }]
    };
    if (this.state.error === false) {
      posts = <BootstrapTable id="postList" classes=" table-borderless  w-90" keyField='id' data={this.state.posts} columns={columns} bordered={false} pagination={paginationFactory(options)} />
    }
    return (
      <Layout>

        <Wrapper>
          <div id="postsContent">

            {posts}

          </div>

          <Route path='/fullPost' component={FullPost} />

        </Wrapper>

      </Layout>

    );
  }
}
export default Posts;