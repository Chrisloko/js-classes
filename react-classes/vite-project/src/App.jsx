import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
import Button from './components/button'


function App() {

const [pokemons, setPokemons] = useState([]);
const [savePokemons, setSavePokemons] = useState('');

useEffect(
   () => {
      console.log("efecto");
      fetch("https://pokeapi.co/api/v2/pokemon/").then((resp) =>{
         resp.json().then((data)=>{
            console.log(data);
            setPokemons(data.results);
            setSavePokemons(data.next);
         })
      });
      
      
   }
   , [
  
   ]
) 
   return(
   <div>
      {
         pokemons.map((pokemon, index)=>{
            return(
               <Card name={pokemon.name} key={index}/>
            )
         })
      }
      <Button setPokemons={setPokemons} savePokemons={savePokemons} setSavePokemons={setSavePokemons}/>
   </div>
   )
}


export default App
