import React, {Component} from 'react';
import {PaperItem} from './PaperItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

export default class list extends Component {
    constructor(props){
        super(props);
        this.state = ({
            todos: this.props.todos,
            PaperColor: '#FFAA33',
        });
    }

    render(){
        return (
            <SpacingGrid todos={this.state.todos} PaperColor={this.state.PaperColor}/>
        )
    }
}

function SpacingGrid(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          {props.todos.map((todo,idx) => (
            <Grid key={todo.id} item xs={12} sm={2}>
              <PaperItem title={todo.item} content = {todo.value} PaperColor={props.PaperColor}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
