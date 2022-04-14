import './App.css';
import Header from './componets/header/Header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/Main.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<h1>Авторизация</h1>} />
          <Route path="/card/:id" element={<h1>Card</h1>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
