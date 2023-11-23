import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(result => {
                // console.log(result); // Berisi config, data (100 array of object punya JSONPlaceholder), headers, request, dan objek prototype
                // Kelebihannya adlh mengembalikan headers. Beberapa backend menyimpan token di headers.

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
                    return <Post key={ post.id } tittle={ post.tittle } desc={ post.body } />
                }) }
            </Fragment>
        );
    }
}

export default BlogPost;