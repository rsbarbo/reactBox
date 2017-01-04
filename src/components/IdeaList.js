import React from 'react'
import Idea from '../components/Idea'

const IdeaList = ({ ideas, destroy }) => {
  return(
    <div className='IdeaList'>
      { ideas.map( idea => <Idea { ...idea }
                            key={idea.id}
                            destroy={ destroy }/> )
                           }
    </div>
  )
}

export default IdeaList;
