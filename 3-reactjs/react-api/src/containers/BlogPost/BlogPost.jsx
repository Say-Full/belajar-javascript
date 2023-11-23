import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';

class BlogPost extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            // .then(json => console.log(json)); // Berisi 100 array of object yg tiap object memiliki properti userId, id, tittle, dan body
            .then(json => {
                this.setState({
                    posts: json
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