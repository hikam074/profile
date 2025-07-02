import {useState} from 'react';

export default function Contact() {
    const [nama, setNama] = useState('');
    const [pesan, setPesan] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Terima kasih ${nama}, pesan telah terkirim!`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={nama} onChange={e => setNama(e.target.value)} placeholder='Nama anda' />
            <input value={pesan} onChange={e => setPesan(e.target.value)} placeholder='Pesan anda' />
            <button type="submit">Kirim</button>
        </form>
    );
}
