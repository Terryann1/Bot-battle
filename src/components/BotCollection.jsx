import { useEffect,useState} from "react";
function BotCollection(){
    const[bots, setBots]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/bots")
        .then((response)=>response.json())
        .then((data)=>{
            setBots(data);
        })
        .catch((error) => {
            console.error("Error fetching bots:", error);  // Optional: Catching errors for better debugging
          });


        
    }, []);
    return(
        <div>
            <h1>Bot List</h1>
            <ul>
            {bots.map(bot => (
          <li key={bot.id}>
            <h2>{bot.name}</h2>
            <img src={bot.avatar_url} alt={bot.name}  />
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
          </li>
        ))}
            </ul>

        </div>
    )


}
export default BotCollection;