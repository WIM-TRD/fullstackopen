import React from 'react'

const Header = (props) => {
  return ( <h1> {props.course} </h1>
  )
}

const Part = (props) => {
  return <p>{props.item.name}: {props.item.exercises}</p>
}

const Content = (props) => {
    const content = props.content.map((item) => {
        return <Part item = {item} />})
    return ( <div> {content} </div>
      )
    }

  const Total = (props) => {
      const total = props.content.reduce((a, v) => a = a + v.exercises, 0)
      return ( <p> Number of exercises {total} </p>
      )
    }

  const App = () => {
      const course = 'Half Stack application development'
      const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
      }
      const part2 = {
        name: 'Using props to pass data',
        exercises: 7
      }
      const part3 = {
        name: 'State of a component',
        exercises: 14
      }
      const content = [part1,part2,part3];

      return (
        <div>
          <Header course = {course} />
          <Content content = {content} />
          <Total content = {content} />
        </div>
      )
    }

    export default App
