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
        
        if( this.state.id === "" ) {
            // Menambahkan data baru
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
        }
        else {
            // Fitur Edit = Di dalam array, data yang ingin diubah disimpan sebagai data baru dan baris data yang ingin diubah tersebut dihapus.
            const notSelectedFood = this.state.foods.filter((food) => food.id !== this.state.id).map((filteredFood) => {
                return filteredFood
            });
            
            this.setState({
                foods: [
                    ...notSelectedFood,
                    {
                        id: this.state.foods.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            });

        }

        this.setState({
            nama: "",
            deskripsi: "",
            harga: 0,
            id: ""
        });
    };

    ubahData = (id) => {
        const selectedFood = this.state.foods.filter((food) => food.id === id).map((filteredFood) => {
            return filteredFood
        });

        this.setState({
            nama: selectedFood[0].nama,
            deskripsi: selectedFood[0].deskripsi,
            harga: selectedFood[0].harga,
            id: selectedFood[0].id
        });
    };

    hapusData = (id) => {
        const notSelectedFood = this.state.foods.filter((food) => food.id !== id).map((filteredFood) => {
            return filteredFood
        });

        this.setState({
            foods: notSelectedFood
        });
    };

    render() {
        return(
            <div>
                <NavbarComponent />
                <h1>CRUD React-Bootstrap</h1>

                <div className="container mt-4">
                    <Tabel foods={this.state.foods} ubahData={this.ubahData} hapusData={this.hapusData} />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}