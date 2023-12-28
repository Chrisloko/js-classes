export default function Button({setPokemons, setSavePokemons, savePokemons}){
    // console.log(name);
    function handleClick(){
        fetch(savePokemons).then((resp) =>{
             resp.json().then((data)=>{
                console.log(data);
                setPokemons(data.results);
                setSavePokemons(data.next);
             })
          });
        
    }
    return (
        <button onClick={handleClick}>Siguiente</button>
    )
}