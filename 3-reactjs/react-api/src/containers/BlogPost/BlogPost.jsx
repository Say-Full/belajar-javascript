import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        posts: [],
        formBlogPost: {
            id: 1,
            userId: 1,
            title: '',
            body: ''
        }
    }

    fetchApiData = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then(result => {
                this.setState({
                    posts: result.data
                });
            });
    }

    postDataToApi = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then((res) => {
                this.fetchApiData();
            }, (err) => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.fetchApiData();
    }

    handleHapusPost = (id) => {
        axios.delete(`http://localhost:3004/posts/${id}`).then(res => { this.fetchApiData(); });
    }

    handleFormChange = (event) => {
        let newFormBlogPost = {...this.state.formBlogPost};
        newFormBlogPost['id'] = new Date().getTime();
        newFormBlogPost[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: newFormBlogPost
        }, () => {

        });
    }

    handleSubmit = () => {
        this.postDataToApi();
    }
    
    render() {
        return(
            <Fragment>
                <p className='section-tittle'>Isi</p>



                <div className="form-tambah-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' placeholder='Tambah judul' onChange={ this.handleFormChange } />

                    <label htmlFor="body">Deskripsi</label>
                    <textarea name="body" id="body" cols="30" rows="10" onChange={ this.handleFormChange } ></textarea>

                    <button className='btn-submit' onClick={ this.handleSubmit }>Simpan</button>
                </div>



                { this.state.posts.map(post => {
                    return <Post key={ post.id } data={ post } hapusPost={ this.handleHapusPost } />
                }) }
            </Fragment>
        );
    }
}

export default BlogPost;