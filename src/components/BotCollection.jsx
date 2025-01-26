import { useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
function BotCollection(){
    const[bots, setBots]=useState([]);//Initializing a state
    const [army, setArmy] = useState([]);  // Store the bots added to the army
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
    //Removing bot from the army
    const deleteBot = (botId) => {
        setArmy(army.filter((bot) => bot.id !== botId));
      };
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
            <button
                            onClick={() => addToArmy(bot)}  // Use addToArmy instead of handleAddToArmy
                            disabled={army.some((b) => b.id === bot.id)}  // Disable button if bot is already in the army
                        >
                            {army.some((b) => b.id === bot.id) ? "Already in Army" : "Add to Army"}
                        </button>
                        <button onClick={() => deleteBot(bot.id)} style={{ color: "red" }}>
              x
            </button>
            
          </li>
        ))}
            </ul>
            <YourBotArmy army={army} /> {/* Render the YourBotArmy component and pass the army state */}

            
        </div>
    )


}
export default BotCollection;