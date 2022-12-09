import React from 'react'

export default function Note(props) {
  return (
    <>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button>-</button>
    </>

  )
}
