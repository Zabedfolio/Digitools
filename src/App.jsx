import { useState } from 'react';
import './App.css'
import Cart from './components/Cart';
import Models from './components/Models';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify'

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
      <Header selectType={selectType} setSelectType={setSelectType} cartCount={carts.length} />

      {selectType === "products" && (
        <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      )}
      {selectType === "cart" && (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App