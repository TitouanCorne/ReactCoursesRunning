import { useState } from 'react';

function Interface({courses}){
  return(
    <div>
      <MyRacesBox/>
      <RacesBox/>
    </div>
  )
}

function MyRacesBox(){
  return(
    <div>      
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
    <tr>
      <th>Marathon des Géants</th>
      <th>Toulouse</th>
      <th>10 novembre 2024</th>
    </tr>
  )
}

function RacesBox(){
  return(
    <div>
      <Race/>
    </div>
  )
}

function Race(){
  return(
    <div className='race-container'>
      <img className='race-img'></img>
      <h1 className='race-name'>Marathon des Géants</h1>
      <h3 className='race-info'>Toulouse, 10 novembre 2024</h3>
      <h3 className='race-price'>Prix : 50€</h3> 
      <button className='race-selection'></button>
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
