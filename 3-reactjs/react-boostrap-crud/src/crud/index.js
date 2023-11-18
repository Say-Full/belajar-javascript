import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent';
import Tabel from './Tabel';
import Formulir from './Formulir';

export default class Crud extends Component {
    render() {
        return(
            <div>
                <NavbarComponent />
                <h1>CRUD React-Bootstrap</h1>

                <div class="container mt-4">
                    <Tabel />
                    <Formulir />
                </div>
            </div>
        );
    }
}