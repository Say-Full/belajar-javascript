import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent';
import Tabel from './Tabel';
import Formulir from './Formulir';

export default class Crud extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foods: [],
            nama: "",
            deskripsi: "",
            harga: 0,
            id: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault(); // Menghilangkan reload halaman, yaitu fungsi asli suatu form, krn kita ingin membuat single-page application
        
        this.setState({
            foods: [
                ...this.state.foods,
                {
                    id: this.state.foods.length + 1,
                    nama: this.state.nama,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga
                }
            ]
        });
    };

    render() {
        return(
            <div>
                <NavbarComponent />
                <h1>CRUD React-Bootstrap</h1>

                <div className="container mt-4">
                    <Tabel />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}