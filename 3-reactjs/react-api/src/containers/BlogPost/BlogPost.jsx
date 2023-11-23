import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://localhost:3004/posts')
            .then(result => {
                this.setState({
                    posts: result.data
                });
            });
    }
    
    render() {
        return(
            <Fragment>
                <p className='section-tittle'>Isi</p>
                { this.state.posts.map(post => {
                    return <Post key={ post.id } tittle={ post.title } desc={ post.body } />
                }) }
            </Fragment>
        );
    }
}

export default BlogPost;