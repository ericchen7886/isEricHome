import React, { PureComponent } from 'react'
import Title from './component/Title'
import Form from './component/Form'
import Clist from './component/list'

export default class App extends PureComponent {
  constructor(){
    super();
    let list = [
      {id:1 , item: 'eat1'},
      {id:2 , item: 'eat2'},
      {id:3 , item: 'eat3'},
      {id:4 , item: 'eat4'},
      {id:5 , item: 'eat5'},
    ]

    this.state= {
      todos: list,
      addIdx: list.length + 1
    }

  }

  addItem(text){
    this.setState({
      todos: [...this.state.todos, {addIdx:this.state.addIdx , item: text}], 
    });
  }

  removeItem(id){
     this.setState({
       todos: this.state.todos.filter(
         (todo) => todo.id!==id
       )  
    });
  }

  render() {
    return (
      <div>
        <Title todos = {this.state.todos} />
        <Form addItem = {(text) => this.addItem(text)} />
        <Clist todos = {this.state.todos} removes = {(id) => this.removeItem(id)}/>
      </div>
    )
  }
}
