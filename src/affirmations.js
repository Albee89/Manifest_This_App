import React, { useState } from 'react';

const Affirmations = ({ addThought }) => {
  const [newThought, setNewThought] = useState('');

  const handleAddThought = () => {
    // Calling the addThought function with the new thought:
    addThought(newThought);
   
    setNewThought('');
  };

  return (
    <div>
      <input
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <button onClick={handleAddThought}>Send to the universe</button>
    </div>
  );
};

export default Affirmations;
