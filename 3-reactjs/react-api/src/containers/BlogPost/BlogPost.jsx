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
        },
        isUpdate: false
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
                this.setState({
                    formBlogPost: {
                        id: 1,
                        userId: 1,
                        title: '',
                        body: ''
                    }
                });
            }, (err) => {
                console.log(err);
            });
    }

    putDataToApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res => {
            this.fetchApiData();
            this.setState({
                formBlogPost: {
                    id: 1,
                    userId: 1,
                    title: '',
                    body: ''
                },
                isUpdate: false
            });
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

        if( ! this.state.isUpdate ) {
            newFormBlogPost['id'] = new Date().getTime();
        }

        newFormBlogPost[event.target.name] = event.target.value

        this.setState({
            formBlogPost: newFormBlogPost
        }, () => {

        });
    }

    handleSubmit = () => {
        this.state.isUpdate ? this.putDataToApi() : this.postDataToApi()
    }

    handleUbahPost = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        });
    }
    
    render() {
        return(
            <Fragment>
                <p className='section-tittle'>Isi</p>



                <div className="form-tambah-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' placeholder='Tambah judul' onChange={ this.handleFormChange } value={ this.state.formBlogPost.title } />

                    <label htmlFor="body">Deskripsi</label>
                    <textarea name="body" id="body" cols="30" rows="10" onChange={ this.handleFormChange } value={ this.state.formBlogPost.body } ></textarea>

                    <button className='btn-submit' onClick={ this.handleSubmit }>Simpan</button>
                </div>



                { this.state.posts.map(post => {
                    return <Post key={ post.id } data={ post } hapusPost={ this.handleHapusPost } ubahPost={ this.handleUbahPost } />
                }) }
            </Fragment>
        );
    }
}

export default BlogPost;