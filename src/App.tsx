import './index.css';
import './App.css';
import React, { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState('');
  const [oldbalanceOrg, setOldbalanceOrg] = useState('');
  const [newbalanceOrig, setNewbalanceOrig] = useState('');
  const [oldbalanceDest, setOldbalanceDest] = useState('');
  const [newbalanceDest, setNewbalanceDest] = useState('');
  const [type_1, setType1] = useState('');
  const [type_2, setType2] = useState('');
  const [type_3, setType3] = useState('');
  const [type_4, setType4] = useState('');
  const [type_5, setType5] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      amount,
      oldbalanceOrg,
      newbalanceOrig,
      oldbalanceDest,
      newbalanceDest,
      type_1,
      type_2,
      type_3,
      type_4,
      type_5
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-center">Transaction Form</h1>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input 
            type="text" 
            placeholder="Amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Old Balance Origin" 
            value={oldbalanceOrg}
            onChange={(e) => setOldbalanceOrg(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="New Balance Origin" 
            value={newbalanceOrig}
            onChange={(e) => setNewbalanceOrig(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Old Balance Destination" 
            value={oldbalanceDest}
            onChange={(e) => setOldbalanceDest(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="New Balance Destination" 
            value={newbalanceDest}
            onChange={(e) => setNewbalanceDest(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Type 1" 
            value={type_1}
            onChange={(e) => setType1(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Type 2" 
            value={type_2}
            onChange={(e) => setType2(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Type 3" 
            value={type_3}
            onChange={(e) => setType3(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Type 4" 
            value={type_4}
            onChange={(e) => setType4(e.target.value)}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Type 5" 
            value={type_5}
            onChange={(e) => setType5(e.target.value)}
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
