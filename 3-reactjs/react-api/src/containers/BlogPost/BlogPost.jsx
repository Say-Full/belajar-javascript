import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';

class BlogPost extends Component {
    render() {
        return(
            <Fragment>
                <p className='section-tittle'>Isi</p>
                <Post tittle="Contoh tittle" desc="Contoh desc" />
            </Fragment>
        );
    }
}

export default BlogPost;