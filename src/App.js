import './App.css';
import Header from './componets/header/Header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/Main.jsx';
import Login from './pages/login/Login'
import Post from './pages/post/Post'
import MoreCard from './pages/more_card/More_card';





function App() {




  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/card/:id" element={<MoreCard />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<h1 className='text-center mt5'>404</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
