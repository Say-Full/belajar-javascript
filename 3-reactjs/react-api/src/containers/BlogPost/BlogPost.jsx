import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        posts: []
    }

    fetchApiData = () => {
        axios.get('http://localhost:3004/posts')
            .then(result => {
                this.setState({
                    posts: result.data
                });
            });
    }

    componentDidMount() {
        this.fetchApiData();
    }

    handleHapusPost = (id) => {
        axios.delete(`http://localhost:3004/posts/${id}`).then(res => { this.fetchApiData(); });
    }
    
    render() {
        return(
            <Fragment>
                <p className='section-tittle'>Isi</p>
                { this.state.posts.map(post => {
                    return <Post key={ post.id } data={ post } hapusPost={ this.handleHapusPost } />
                }) }
            </Fragment>
        );
    }
}

export default BlogPost;