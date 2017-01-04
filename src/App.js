import React from 'react';
import CreateIdeaForm from './components/CreateIdeaForm.js'
import IdeaList from './components/IdeaList.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = { ideas: [] }
  }

  componentDidMount(){
    const ideas = JSON.parse(localStorage.getItem('ideas'))

    this.setState({ ideas: ideas ? ideas : [] })
  }

  storeIdea(idea){
    //peform the action of adding our new idae to all the ideas
    this.state.ideas.push( idea )
    let ideas = this.state.ideas

    this.setState({ ideas: ideas }, () => this.localStorageVar(ideas))
  }

  localStorageVar(ideas){
    localStorage.setItem('ideas', JSON.stringify(ideas))
  }

  destroyIdea(id){
    let ideas = this.state.ideas.filter( idea => idea.id !== id)
    this.setState({ ideas: ideas}, () => this.localStorageVar(ideas))
  }

  updateIdea(id){
    console.log("update this idea!")
  }

  render() {
    return (
      <div>
        <CreateIdeaForm saveIdea={ this.storeIdea.bind(this) }/>
        <IdeaList ideas={ this.state.ideas }
                  destroy={ this.destroyIdea.bind(this) }
                  update={ this.updateIdea.bind(this)}/>
      </div>
    );
  }
}

export default App;
