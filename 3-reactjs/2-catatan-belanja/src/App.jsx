import { useState } from "react";

const groceryItems = [
    {
        id: 1,
        name: 'Kopi Bubuk',
        quantity: 2,
        checked: true,
    },
    {
        id: 2,
        name: 'Gula Pasir',
        quantity: 5,
        checked: false,
    },
    {
        id: 3,
        name: 'Air Mineral',
        quantity: 3,
        checked: false,
    },
];

export default function App() {
    const [items, setItems] = useState(groceryItems);

    function handleAddItem(item) {
        // setItems(items.push(item)); // Ini akan mengubah array (state) items secara lngsng sehingga tdk mengimplementasikan konsep immutability. Seharusnya buat dlu duplikat dr array-nya, modifikasi isi array yg baru, dan array baru timpa array lama
        setItems([...items, item]);
    }

    function handleDeleteItem(id) {
        setItems( (items) => items.filter((item) => item.id !== id) );
    }

    function handleToggleItem(id) {
        setItems( (items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)) );
    }

    return (
        <div className="app">
            <Header />
            <Form onAddItem={handleAddItem} />
            <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
            <Footer />
        </div>
    )
}

function Header() {
    return <h1>Catatan Belanjaku 📝</h1>;
}

function Form({ onAddItem }) {
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

function GroceryList({ items, onDeleteItem, onToggleItem }) {
    return(
        <>
            <div className="list">
                <ul>
                    { items.map((item) => (
                        <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                    )) }
                </ul>
            </div>
            <div className="actions">
                <select>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button>Bersihkan Daftar</button>
            </div>
        </>
    );
}

function Item({ item, onDeleteItem, onToggleItem }) {
    return(
        <li key={ item.id }>
            <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
            <span style={ item.checked ? { textDecoration: 'line-through' } : {} }>{ item.quantity } { item.name }</span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
        </li>
    );
}

function Footer() {
    return <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>;
}