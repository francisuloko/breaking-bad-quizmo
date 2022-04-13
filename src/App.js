import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import AllCharacters from './pages/allCharacters';
import Quiz from './pages/quiz';

function App() {
  return (
    <Provider store={store}>
      <div className="App d-flex flex-column vh-100">
        <Router>
          <div className="flex-grow-1 position-relative">
            <Routes>
              <Route path="/" exact element={<Quiz />} />
              <Route path="/characters" exact element={<AllCharacters />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
