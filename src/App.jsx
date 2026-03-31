import { useState } from 'react';
import './App.css'
import Cart from './components/Cart';
import Models from './components/Models';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Rating from './components/Rating';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Ready from './components/Ready';
import Footer from './components/Footer';

const getModels = async () => {
  const res = await fetch("/data.json")
  return res.json();
}

const modelPromise = getModels();

function App() {
  const [selectType, setSelectType] = useState("products")
  const [carts, setCarts] = useState([])

  return (
    <>

      <Navbar carts={carts} setCarts={setCarts} cartCount={carts.length}></Navbar>

      <Banner></Banner>

      <Rating></Rating>

      <Header selectType={selectType} setSelectType={setSelectType} cartCount={carts.length} />

      {selectType === "products" && (
        <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      )}
      {selectType === "cart" && (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      <Steps></Steps>

      <Pricing></Pricing>

      <Ready></Ready>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App