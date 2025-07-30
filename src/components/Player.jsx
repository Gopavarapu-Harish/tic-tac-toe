import { useState } from "react";
export default function Player({initailName,symbol,isActive,onChangeName}){
    const [isEditing,setIsEditing]=useState(false);
    const [playerName,setPlayerName]=useState(initailName);
    function handleEditClick(){
        setIsEditing((isEditing)=>!isEditing);
    }
    function handleEditName(event){
        setPlayerName(event.target.value);
        onChangeName(symbol,event.target.value);
    }
    let editablePlayerName=<span className="player-name">{playerName}</span>;
    
    if(isEditing){
        editablePlayerName=<input type='text' required defaultValue={playerName} onChange={handleEditName}/>
        
    }
    return (
        <li className={isActive?"active":undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
      </li>
    )
}