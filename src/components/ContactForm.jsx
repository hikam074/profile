import { useState } from "react";
import emailjs from "emailjs-com";

export default function FormContact() {
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sedang Mengirim...");

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE,
            import.meta.env.VITE_EMAILJS_TEMPLATE,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLICKEY,
        ).then(
            () => {
                setStatus("Pesan terkirim!")
            },
            (err) => {
                console.error(err);
                setStatus("Gagal mengirim pesan!");
            }
        );
        e.target.reset();
    };
    
    return (
        <div className="flex flex-col gap-5 items-center justify-center
            sm:flex-row sm:gap-20">
            <span>
                <h3 className="font-bold text-4xl">Contact me!</h3>

            </span>
            <span>

            <form onSubmit={sendEmail} className="space-y-4">
                <input type="text" name="from_name" placeholder="Nama" required
                    className="w-full p-2 border rounded"
                />
                <input type="email" name="reply_to" placeholder="Email" required
                    className="w-full p-2 border rounded"
                />
                <textarea name="message" placeholder="Pesan" required
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded" >
                    Kirim
                </button>
                {status && <p className="text-sm mt-2">{status}</p>}
            </form>
            </span>
        </div>
    );
}