import React from 'react';
import CreateIdeaForm from './components/CreateIdeaForm.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = { ideas: [] }
  }

  storeIdea(idea){
    //peform the action of adding our new idae to all the ideas
    this.state.ideas.push( idea )
    let ideas = this.state.ideas

    this.setState({ ideas: ideas })
  }

  render() {
    return (
      <CreateIdeaForm saveIdea={ this.storeIdea.bind(this) }/>
    );
  }
}



export default App;
