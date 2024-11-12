import { useState } from 'react';

function Interface({COURSES}){
  const [courses, SetCourses] = useState(COURSES);
  function changeCommitment(i){
    const nextCourses = courses.slice(); //on copie le tableau
    nextCourses[i].commitment = !courses[i].commitment;
    SetCourses(nextCourses);
  }
  return(
    <div className='interface'>
      <MyRacesBox courses={COURSES}/>
      <RacesBox courses={COURSES} onParticipationClick={(i) => changeCommitment(i)}/>
    </div>
  )
}

function MyRacesBox({courses}){
  const rows = []; //contiendra toutes les lignes associées aux courses auxquelles on participe
  let index = 0;
  courses.forEach(element => {
    if(element.commitment){
      rows.push(
        <MyRace key={index} course={element}/>
      );
      index += 1;
    }    
  });
  return(
    <div className='myRacesBox'>      
      <h2> Mes courses à venir : </h2>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

function MyRace({course}){
  return(
    <tr className='tab-myRace'>
      <td className='tab-myRace-name'>{course.name}</td>
      <td className='tab-myRace-place'>{course.place}</td>
      <td className='tab-myRace-date'>{course.date}</td>
    </tr>
  )
}

function RacesBox({courses, onParticipationClick}){
  return(
    <div className='racesBox'>
      <Race key={0} course={courses[0]} onButtonClick={() => onParticipationClick(0)}/>
      <Race key={1} course={courses[1]} onButtonClick={() => onParticipationClick(1)}/>      
      <Race key={2} course={courses[2]} onButtonClick={() => onParticipationClick(2)}/>
    </div>
  )
}

function Race({course, onButtonClick}){
  let selection = ""
  if(course.commitment){
    selection = "X"
  }

  return(
    <div className='race'>
      <img className='race-img' src={course.img}></img>
      <h1 className='race-name'>{course.name}</h1>
      <h3 className='race-info'>{course.place}, {course.date}</h3>
      <div className='race-price-selection'>
        <h3 className='race-price'>Prix : {course.price}</h3> 
        <button className='race-selection' onClick={onButtonClick}>{selection}</button>
      </div>
    </div>
  )
}

const RACES = [
  { name: "Marathon des Géants", place: "Toulouse", date: "10 novembre 2024", price: "50€", img: "./img/marathondesgeants.jpeg", commitment: false},
  { name: "Semi Lourdes-Tarbes", place: "Lourdes", date: "17 novembre 2024", price: "20€", img: "./img/semilourdestarbes.jpg", commitment: false },
  { name: "Tout Rennes Court !", place: "Rennes", date: "13 janvier 2025", price: "25€", img: "./img/toutrennescourt.jpeg", commitment: false }
];

export default function App() {
  return <Interface COURSES={RACES} />;
}
