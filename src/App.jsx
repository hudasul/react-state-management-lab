// src/App.jsx

import { useState } from "react";
import "./App.css"

const App = () => {
  let totalStrength = 0
  let totalAgility =0
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])

  function handleAddFighter(fighter) {

    if(money < fighter.price){
      console.log("Not enough money")
    }else{
      const newMoney = money - fighter.price
      setMoney(newMoney)
  
    const newTeam = [...team, fighter]
    setTeam(newTeam)
   

    const newZombieFighters = [...zombieFighters]
    const adddedFighter = newZombieFighters.indexOf(fighter)
   
    newZombieFighters.splice(adddedFighter,1)
    setZombieFighters(newZombieFighters)

   }
  }

  function handleRemoveFighter(fighter){
    const newTeam = [...team]
    const deletedFighter = newTeam .indexOf(fighter)
    newTeam.splice(deletedFighter,1)

    setTeam(newTeam)

     const newZombieFighters = [...zombieFighters, fighter]
     setZombieFighters(newZombieFighters)

     const newMoney = money + fighter.price
     setMoney(newMoney)

    

  }
  
  function calculatStrength(){
    team.forEach(member => {
      totalStrength += member.strength
    });

    return totalStrength
  }
  
   function calculatAgility(){
    team.forEach(member => {
      totalAgility += member.agility
    });

    return totalAgility
  }
  
  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {calculatStrength()}</h2>
      <h2>Team Agility: {calculatAgility()}</h2>
      <h2>Team</h2>
      {team.length === 0 ? <p>Pick some team members!</p> : <>
      <ul>
        {team.map((fighter) => {
          return (<li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h4>{fighter.name}</h4>
            <p>price: {fighter.price}</p>
            <p>strength: {fighter.strength}</p>
            <p>agility: {fighter.agility}</p>
            <button onClick={()=>{
              handleRemoveFighter(fighter)
            }}>Delete</button>
          </li>)
        })}
      </ul>
      </>}
      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((fighter) => {
          return (<li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h4>{fighter.name}</h4>
            <p>price: {fighter.price}</p>
            <p>strength: {fighter.strength}</p>
            <p>agility: {fighter.agility}</p>
            <button onClick={()=>{
              handleAddFighter(fighter)
            }}>Add</button>
          </li>)
        })}
      </ul>

    </>
  );
}

export default App

