import React, { PureComponent } from 'react'
import Clist from './component/list'
import Container from '@material-ui/core/Container';

export default class App extends PureComponent {
  constructor(){
    super();
    let todos = [
      {id:1 , item: '總件數', value: '10'},
      {id:2 , item: '總重量'  , value: '20'},
      {id:3 , item: '總材積重' , value: '30'},
      {id:4 , item: '累計件數', value: '40'},
      {id:5 , item: '累計重量', value: '50'},
      {id:6 , item: '累計重量', value: '50'},
    ]

    this.state= {
      todos: todos,
      todoColor: '#FFAA33',
      todosNeedBlock:  Math.floor(12/todos.length),
    }

  }

  render() {
    return (
      <div>
        <Container fixed>
          <Clist todos = {this.state.todos} 
          todoColor = {this.state.todoColor} 
          todosNeedBlock={this.state.todosNeedBlock}/>
        </Container>
      </div>
    )
  }
}
