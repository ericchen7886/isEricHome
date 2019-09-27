import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Style = require("./PaperList_style.module.css");

const PaperItem = (props) => {
  const { title, content, todoColor } = props;

  const backgroundColor = {
    backgroundColor: todoColor,
  };


  return (
          <Paper className={Style.title} style={backgroundColor}>
              <div className={Style.content} > 
                  <div className={Style.name}>
                    {title}
                  </div>
                  <div className={Style.value}>
                    {content}
                  </div>
              </div>               
          </Paper>
  )
}

export default class list extends Component {
    render(){
        return (
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              {this.props.todos.map((todo,idx) => (
                <Grid key={todo.id} item xs={this.props.todosNeedBlock}>
                  <PaperItem title={todo.item} content = {todo.value} todoColor={this.props.todoColor}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        )
    }
}

