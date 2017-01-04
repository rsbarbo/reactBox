import React from 'react'

const Idea = ({ title, body, id, destroy }) => {
  return(
    <div className="Idea">
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={ () => destroy(id) }>Destroy</button>
      <button>Update</button>
    </div>
  )
}

export default Idea;
