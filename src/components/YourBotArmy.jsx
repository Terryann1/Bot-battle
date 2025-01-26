import React from "react";
import BotCollection from "./BotCollection";

function YourBotArmy({ army }) {
    const validArmy = Array.isArray(army) ? army : [];
    return(
        <div>
            <h2>Bot Army</h2>
            <ul>
                  {/* Render each bot in the army */}
                  {validArmy.map((bot) => (
          <li key={bot.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
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
export default YourBotArmy;