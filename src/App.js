import React, { useState } from 'react';
import './App.css';

function App() {
  const [showComments, setShowComments] = useState(false);

  if (!showComments) {
    return (
      <div className="main-page">
        <h1>Welcome to the Blog</h1>
        <button onClick={() => setShowComments(true)}>Go to Comments</button>
      </div>
    );
  }

  return (
    <div id="root">
      <div className="comments">
        <h3>Comments</h3>
        <ul>
          <li>Comment 1</li>
          <li>Comment 2</li>
        </ul>
        <form>
          <input type="text" placeholder="Add a comment" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;