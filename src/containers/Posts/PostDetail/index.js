import React, { Component } from 'react';
import axios from 'axios';

class PostDetail extends Component {
    state = {
        post: null,
    }

    componentDidUpdate = () => {
        if (this.props.post) {
            if (!this.state.post || (this.state.post.id !== this.props.post)) {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.post}`)
                    .then(response => {
                        this.setState({ post: response.data.body })
                    })
                    .catch(error => {
                        console.log('33333333 ',error)
                     })
            }
        }
    }

    render() {
        return (
            <div>{this.state.post}</div>
        )
    }
}

export default PostDetail;
