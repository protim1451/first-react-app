import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singer'

function App() {
  const actors = ['Sakib','Raj','Jasim','Rubel']
  const singers = [
    {id: 1, name:'Sakib', age: 45},
    {id: 2, name:'Raj', age: 35},
    {id: 3, name:'Jasim', age: 55},
    {id: 4, name:'Rubel', age:65},
  ]
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h3>Vite + React</h3>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name={"khaga"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core Concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="6" score="91"></Student>
      <Student grade="8" score="87"></Student>
      <Developer></Developer> */}

    </>
  )
}

function Device(props) {
  return <h2>This Device: {props.name} Price: {props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 50;
  const person = { name: 'sakib', age: 12 }
  return <h3>I am {person.name} Person with age: {age + money}</h3>
}

const { grade, score } = { grade: '', score: '' }
function Student({ grade, score }) {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )

}

function Developer() {
  const developerstyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '15px'
  }
  return (
    <div style={developerstyle}>
      <h5>Devo Devo</h5>
      <p>Coding</p>
    </div>
  )
}
export default App
