
import './App.css'
import Models from './components/Models';

const getModels = async() =>{
  const res = await fetch("/data.json")
  return res.json();
}

const modelPromise = getModels();

function App() {

  return (
    <>
    

    <Models modelPromise={modelPromise}></Models>

    </>
  )
}

export default App
