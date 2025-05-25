import './index.css';
import './App.css';
import React, { useState } from "react";

const App = () => {
  const [country, setCountry] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      country,
      address1,
      address2,
      city,
      state,
      zipCode
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-center">Material 1</h1>
        </header>

        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          <input 
            type="text" 
            placeholder="Country" 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Address 1" 
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Address 2" 
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="City" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="State" 
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="ZIP" 
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="border p-2 rounded"
          />

          <button 
            type="submit" 
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
