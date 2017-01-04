import React from 'react';
import CreateIdeaForm from './components/CreateIdeaForm.js'
import IdeaList from './components/IdeaList.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = { ideas: [] }
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

  render() {
    return (
      <div>
        <CreateIdeaForm saveIdea={ this.storeIdea.bind(this) }/>
        <IdeaList ideas={ this.state.ideas }/>
      </div>
    );
  }
}



export default App;
