import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import PostDetail from './PostDetail';

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            currentPost: null,
        }
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.setState({ posts: response.data }));
    }

    handleClick = (id) => {
        this.setState({ currentPost: id });
    }

    handlePost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            user: 'test'
        }).then((response) => {
            console.log('111111111111', response);
        })
    }

    render() {
        const posts = this.state.posts.map(post => (
            <Post key={post.id} title={post.title} handleClick={() => {
                this.handleClick(post.id)
            }}></Post>)
        )
        console.log(this.state.currentPost);
        return(<div>
            <button onClick={this.handlePost}>Post</button>
            <PostDetail post={this.state.currentPost} />
            {posts}
        </div>)
    }
}

export default Posts;