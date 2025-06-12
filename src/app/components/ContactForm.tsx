'use client'
import { useEffect, useRef, useState } from 'react';
import { FormType } from '../types/form-type';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [objectData, setObjectData] = useState<FormType | null>(null);
    
    useEffect(()=>{
        console.log("Form data changed:", { name, email, text });
    },[name]) 

    const emailInput = useRef<HTMLInputElement>(null);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !text) {
            setError("Prosím, vyplň všechna pole.");
            return;
        }
        if(emailInput.current?.value==="negr@gmail.com"){
            setEmail("negr@yahoo.com");
            emailInput.current.style.borderColor = "red";
        }
        setError('');
        const data: FormType = { name, email, text };
        console.log(data);
        setObjectData(data);
        
    };

    return (
        <form onSubmit={submit} className="flex flex-col gap-4 p-4 bg-white rounded shadow-md dark:bg-gray-800 dark:text-white">
            <label className="flex flex-col">
                <span className="mb-2 text-gray-700 dark:text-white">Name</span>
                <input type="text" className="p-2 border border-gray-300 rounded text-black dark:text-white" value={name} onChange={(e) => setName(e.target.value)}  />
            </label>
            <label className="flex flex-col">
                <span className="mb-2 text-gray-700 dark:text-white">Email</span>
                <input type="email" className="p-2 border border-gray-300 rounded text-black dark:text-white" value={email} onChange={(e) => setEmail(e.target.value)} ref={emailInput} />
            </label>
            <label className="flex flex-col">
                <span className="mb-2 text-gray-700 dark:text-white">Message</span>
                <textarea className="p-2 border border-gray-300 rounded text-black dark:text-white" rows={4} value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
            {objectData && <div>{JSON.stringify(objectData)}</div>}
        </form>
    );
}
