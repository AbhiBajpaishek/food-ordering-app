import './App.css';
import Main from './components/Main/Main';
import Header from './components/UI/Header/Header';
import CartProvider from './components/context/CartProvider';

function App() {
  return (
    <CartProvider>
    <div className="App">
        <Header></Header>
        <Main></Main>
    </div>
    </CartProvider>
  );
}

export default App;
