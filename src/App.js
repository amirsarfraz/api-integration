import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./Products";


function App() {
  return (
    <div className="App">
      <header>
        <>
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    <h1>Welcome to the Redux toolkit store</h1>
    <h2>Products</h2>
        {/* <UseEffectAPI/> */}
        <Products />
        </>
      </header>
    </div>
  );
}

export default App;
