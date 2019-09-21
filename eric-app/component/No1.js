import React, {Component,PureComponent} from 'react';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = (
      {
        list: [
          {id:0 , text:'a'},
          {id:1 , text:'b'},
          {id:2 , text:'c'},
          {id:3 , text:'d'},
          {id:4 , text:'e'},
          {id:5 , text:'f'},
        ]
      }
    );
  }

  reverse(){
    this.setState(
      {
        list: this.state.list.reverse()
      }
    );
  }

  spilce = () => {
    this.setState(
      {
        list: this.state.list.splice(1)
      }
    );
  }

  render(){
    return(
      <div>
        <button onClick={() => this.reverse(this)}>reverse</button>
        <button onClick={this.spilce}>spilce</button>
        <ol>
          {this.state.list.map((item,idx) => {
              return (
                <Li 
                  key={idx} text={item.text} keyText={item.id} 
                />
              );
            }
          )}
        </ol>
      </div>
    );
  }
}

class Li extends PureComponent{
  render(){
    return(
      <li> {this.props.text},{this.props.keyText}</li>
    );
  }
}

export default App;
