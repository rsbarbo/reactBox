import React from 'react'

class CreateIdeaForm extends React.Component {
  constructor() {
    super();
    this.state = { title: '', body: '' }
  }

  updateProperties(event) {
    
  }

  render(){
    return(
      <div>
        <input className='CreateIdea-title'
               type='text' name='title'
               placeholder='Title'
               onChange={ (event) => this.updateProperties(event) }/>
        <textarea className="CreateIdea-body"
                  name='body' placeholder='Body'/>
        <button className='CreateIdea-submit'>Submit</button>
      </div>
    )
  }

}

export default CreateIdeaForm;
