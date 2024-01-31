import Affirmations from './affirmations.js';
import './App.css'; // Import App-specific styles
import './index.css'; // Import global styles

function App() {
  // Define addThought function
  const addThought = (newThought) => {
    // Implement the logic to add a new thought
    console.log(`Adding thought: ${newThought}`);
  };

  const logoContainerStyle = {
    width: '320px', 
    height: '300px',
    overflow: 'hidden', // Hide overflowing content
  };

  const logoStyle = {
    width: '100%', // Ensure the image takes the full width of the container
    height: 'auto',
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={logoContainerStyle}>
          <div>
            {/* Pass addThought function as a prop to Affirmations component */}
            <h1>Affirmations</h1>
            <Affirmations addThought={addThought} />
            <img src="./spaceship.jpg" className="App-logo" alt="" style={logoStyle} />
          </div>
        </div>
        <p>{/* Additional content can be added here */}</p>
      </header>
    </div>
  );
}

export default App;
