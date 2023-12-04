import { useState } from "react";

export default function Form({ onAddItem }) {
    // const quantityNum = Array(5); // Array kosong
    // const quantityNum = [...Array(5))]; // Sebuah array yg setiap elemnnya berisi undefined
    const quantityNum = [...Array(5)].map( (_, i) => ( // parameter pertama adlh item tiap indeks array tp krn kita gk pkk, kita tampung ke dlm `_`
            <option value={i + 1} key={i + 1}>{i + 1}</option>
        ) );
    
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();

        if( !name ) return; // Nama item hrs diisi
        
        const newItem = {
            name,
            quantity,
            checked: false,
            id: Date.now()
        }

        onAddItem(newItem);

        setName('');
        setQuantity(1);
    }

    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select value={quantity} onChange={ (e) => setQuantity(Number(e.target.value)) }>{quantityNum}</select>
                <input type="text" placeholder="nama barang..." value={name} onChange={ (e) => setName(e.target.value) } />
            </div>
            <button>Tambah</button>
        </form>
    );
}