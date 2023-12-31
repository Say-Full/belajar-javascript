import React from 'react';
import { Table } from 'react-bootstrap';

const Tabel = ({ foods, ubahData, hapusData }) => {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nama Makanan</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                { foods.map(( food, index ) => {
                    return(
                        <tr key={index}>
                            <td>{ index+1 }</td>
                            <td>{ food.nama }</td>
                            <td>{ food.deskripsi }</td>
                            <td>Rp. { food.harga }</td>
                            <td>
                                <button className='btn btn-info mr-2' onClick={ () => ubahData(food.id) }>Ubah</button>
                                <button className='btn btn-danger' onClick={ () => hapusData(food.id) }>Hapus</button>
                            </td>
                        </tr>
                    );
                }) }
            </tbody>
        </Table>
    );
};

export default Tabel;