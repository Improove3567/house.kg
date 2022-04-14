import './App.css';
import Card from './componets/card/Card.jsx';
import Header from './componets/header/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />

      <main className='container mt-5'>
        <h2 className='text-center'>Последние объявления</h2>

        <div className='mt-5 row'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </main>
    </div>
  );
}

export default App;
