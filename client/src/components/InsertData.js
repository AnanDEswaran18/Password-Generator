import React, { useState } from 'react';
import axios from 'axios';
const InsertData = () => {
    const [letters, setLetters] = useState('');
    const [symbols, setSymbols] = useState('');
    const [numbers, setNumbers] = useState('');
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:5000/generate-password', {
                letters: parseInt(letters),
                symbols: parseInt(symbols),
                numbers: parseInt(numbers),
            })
            .then((response) => {
                const generatedPassword = response.data.password;
                setGeneratedPassword(generatedPassword);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='container'>
            <h1>Enter the password Combination</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="letters">Number of Letters</label>
                <input
                    type="number"
                    id="letters"
                    name="letters"
                    required
                    value={letters}
                    onChange={(e) => setLetters(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="symbols">Number of Symbols</label>
                <input
                    type="number"
                    id="symbols"
                    name="symbols"
                    required
                    value={symbols}
                    onChange={(e) => setSymbols(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="numbers">Number of Numbers</label>
                <input
                    type="number"
                    id="numbers"
                    name="numbers"
                    required
                    value={numbers}
                    onChange={(e) => setNumbers(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Generate Password</button>
            </form>
            {generatedPassword && (
                <div>
                    <h2>Your Password is</h2>
                    <p>{generatedPassword}</p>
                </div>
            )}
        </div>
    );
};

export default InsertData;
