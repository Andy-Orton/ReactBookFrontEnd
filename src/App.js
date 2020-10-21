import React from 'react';
import './App.css';
import './helper.js';
import { realtimeURL } from './helper.js';
function App() {
  return (
    <div>
      <Projects></Projects>
    </div>
  );
}


function Projects() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch(realtimeURL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li>
            
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
