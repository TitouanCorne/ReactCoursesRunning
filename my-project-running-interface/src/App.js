import { useState } from 'react';

function Interface({courses}){
  return(
    <div className='interface'>
      <MyRacesBox/>
      <RacesBox/>
    </div>
  )
}

function MyRacesBox(){
  return(
    <div className='myRacesBox'>      
      <h2> Mes courses à venir : </h2>
      <table>
        <tbody>
          <MyRace />
        </tbody>
      </table>
    </div>
  )
}

function MyRace(){
  return(
    <tr className='tab-myRace'>
      <td className='tab-myRace-name'>Marathon des Géants</td>
      <td className='tab-myRace-place'>Toulouse</td>
      <td className='tab-myRace-date'>10 novembre 2024</td>
    </tr>
  )
}

function RacesBox(){
  return(
    <div className='racesBox'>
      <Race/>
      <Race/>      
      <Race/>
    </div>
  )
}

function Race(){
  return(
    <div className='race'>
      <img className='race-img'></img>
      <h1 className='race-name'>Marathon des Géants</h1>
      <h3 className='race-info'>Toulouse, 10 novembre 2024</h3>
      <div className='race-price-selection'>
        <h3 className='race-price'>Prix : 50€</h3> 
        <button className='race-selection'>X</button>
      </div>
    </div>
  )
}

const COURSES = [
  { name: "Marathon des Géants", place: "Toulouse", date: "10 novembre 2024", price: "50€", img: "./img/marathondesgeants", commitment: true},
  { name: "Semi Lourdes-Tarbes", place: "Lourdes", date: "17 novembre 2024", price: "20€", img: "./img/semilourdestarbes", commitment: false },
  { name: "Tout Rennes Court !", place: "Rennes", date: "13 janvier 2025", price: "25€", img: "./img/toutrennescourt", commitment: false }
];

export default function App() {
  return <Interface courses={COURSES} />;
}
