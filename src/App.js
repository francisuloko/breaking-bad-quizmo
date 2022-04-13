import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import AllCharacters from './pages/allCharacters';
import Quiz from './pages/quiz';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App d-flex flex-column vh-100">
        <Router>
          <Header />
          <div className="flex-grow-1 position-relative">
            <Routes>
              <Route path="/quiz" exact element={<Quiz />} />
              <Route path="/" exact element={<AllCharacters />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
