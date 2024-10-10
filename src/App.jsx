import { useState } from "react";
import { Card } from "./components/Card/Card"
const url = ' https://rickandmortyapi.com/api/character';
import rick from './assets/rick.jpg'
function App() {
  const [nameCharacter, setNameCharacter] = useState('rick') 
  const [imgCharacter, setImgCharacter] = useState(rick) 
  const [quoteCharacter, setQuoteCharacter] = useState('¡Ay caramba!') 

  const handleGetApi = async()=>{
    const response = await fetch(url)
    const data = await response.json()


    setNameCharacter(data[0].name)
    setImgCharacter(data[0].image)
    setQuoteCharacter(data[0].gender)
  }
  return(
    <>
    <Card
    nameCharacter={nameCharacter}
    imgCharacter={imgCharacter}
    quoteCharacter={quoteCharacter}
    />
    <button onClick={handleGetApi}>Generate</button>
    </>
  )
  
}

export default App
