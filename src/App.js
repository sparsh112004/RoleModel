import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <nav>
          <h1>My Role Model</h1>
        </nav>
      </header>
      <main>
        <Home />
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 My Role Model Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;