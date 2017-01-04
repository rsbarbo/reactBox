import React from 'react'
import Idea from '../Idea'

const IdeaList = ({ ideas }) => {
  return(
    <div className='IdeaList'>
      { ideas.map( idea => <Idea { ...idea }
                            key={idea.id}/> ) }
    </div>
  )
}

export default IdeaList;
