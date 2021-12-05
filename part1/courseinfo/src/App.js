import React from 'react'

const Header = (props) => {
  return ( <h1> {props.course} </h1>
  )
}

const Part = (props) => {
  return <p>{props.part}: {props.exercise}</p>
}

const Content = (props) => {
    const content = props.content.map((item) => {
        return <Part part = {item.part} exercise={item.exercise} />})
    return ( <div> {content} </div>
      )
    }

  const Total = (props) => {
      const total = props.content.reduce((a, v) => a = a + v.exercise, 0)
      return ( <p> Number of exercises {total} </p>
      )
    }

  const App = () => {
      const course = 'Half Stack application development'
      const part1 = 'Fundamentals of React'
      const exercises1 = 10
      const part2 = 'Using props to pass data'
      const exercises2 = 7
      const part3 = 'State of a component'
      const exercises3 = 14
      const content = [{
          part: part1,
          exercise: exercises1
        },
        {
          part: part2,
          exercise: exercises2
        },
        {
          part: part3,
          exercise: exercises3
        }
      ];

      return (
        <div>
          <Header course = {course} />
          <Content content = {content} />
          <Total content = {content} />
        </div>
      )
    }

    export default App
