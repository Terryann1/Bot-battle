import { useEffect,useState} from "react";
function BotCollection(){
    const[bots, setBots]=useState([]);//Initializing a state
    //Get request
    useEffect(()=>{
        fetch("http://localhost:3000/bots")
        .then((response)=>response.json())
        .then((data)=>{
            setBots(data);//Storing the fetched bots in the array
        })
        .catch((error) => {
            console.error("Error fetching bots:", error);  // Optional: Catching errors for better debugging
          });


        
    }, []);
    //Adding a bot to an army
    const addToArmy=(bot)=>{
        // Check if bot is already enlisted in the army
    if (!army.some((b) => b.id === bot.id)) {
        setArmy([...army, bot]);  // Add bot to the army if not already enlisted
      }

    }
    return(
        <div>
            <h1>BotCollection List</h1>
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
            //Adding a button
            <button onClick={() => handleAddToArmy(bot)} disabled={army.some((b) => b.id === bot.id)}>
              {army.some((b) => b.id === bot.id) ? "Already in Army" : "Add to Army"}
            </button>
          </li>
        ))}
            </ul>
            

        </div>
    )


}
export default BotCollection;