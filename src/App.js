import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./Products";
import { Provider } from "react-redux";
import store from './store/store'
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
<Provider store={store}>
<header>
        <>
        <BrowserRouter>
        <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>

        {/* <UseEffectAPI/> */}
        <Products />
        </>
      </header>
</Provider>
    </div>
  );
}

export default App;
