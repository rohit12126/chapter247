import React, {Component} from 'react';

class Post extends Component {
    render() {
        return(<>
            <div>{this.props.title}</div>
            <button onClick={this.props.handleClick}>Show Detail</button>
        </>)
    }
}

export default Post;