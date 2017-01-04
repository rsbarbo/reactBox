import React from 'react'

const IdeaList = ({ ideas }) => {
  return(
    <div className='IdeaList'>
      { ideas.map( idea => <Idea { ...idea } /> ) }
    </div>
  )
}

const Idea = ({ title, body, id }) => {
  return(
    <div className="Idea">
      <h3>{title}</h3>
      <p>{body}</p>
      <button>Destroy</button>
      <button>Update</button>
    </div>
  )
}

export default IdeaList
