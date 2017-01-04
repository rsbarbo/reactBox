import React from 'react'

class CreateIdeaForm extends React.Component {
  constructor() {
    super();
    this.state = { title: '', body: '' }
  }

  updateProperties(event) {
    event.preventDefault();

    const fieldName = event.target.name
    const fieldValue = event.target.value

    this.setState({ [fieldName]: fieldValue })
  }

  createIdea(event){
    event.preventDefault();

    const idea = { title: this.state.title, body: this.state.body, id: Date.now() }

    this.props.saveIdea( idea )

    this.setState({ title: '', body: '' })
  }

  render(){
    return(
      <div>
        <input className='CreateIdea-title'
               type='text' name='title'
               placeholder='Title'
               value={ this.state.title }
               onChange={ (event) => this.updateProperties(event) }/>
        <textarea className="CreateIdea-body"
                  name='body' placeholder='Message...'
                  onChange={ (event) => this.updateProperties(event) }
                  value={ this.state.body }/>
        <button className='CreateIdea-submit'
                onClick={ (event) => this.createIdea(event) }>Submit</button>
      </div>
    )
  }

}

export default CreateIdeaForm;
