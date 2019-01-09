import React, { Component } from 'react';
import axios from 'axios';

class PostDetail extends Component {
    state = {
        post: null,
    }

    componentDidUpdate = (props) => {
        console.log('1111111111111111111', props)
        if (props.post) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${props.post}`)
                .then(response => {
                    this.setState({ post: response.data })
                })
        }
    }

    render() {
        return(
            <div>{this.state.post}</div>
        )
    }
}

export default PostDetail;
