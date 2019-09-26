import React, { Component } from 'react'
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import  { useState }  from 'react'

export const TitleStyleS = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: red;
`;

function Greeting() {
  //設定一個state為name, 用一個setState取代為setname
    const [name, setName] = useState('eric')
  
    function handleNameChange(e) {
      setName(e.target.value)
    }

    function showMsg() {
        alert('hi! ' + name);
    }

    return (
      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={handleNameChange}
        />
        <button onClick={showMsg}>點我</button>
      </div>
    )
  }

 
export default class Title extends Component {

    
    render() {
        return (
            <div>
                <Hidden smDown={true}>
                    <label>Name</label><TitleStyleS>
                        <h2>代辦事項 ({this.props.todos.length})</h2> 
                    </TitleStyleS>    
                </Hidden>
                <IconButton onClick={this.handleOnclick}>
                    <MenuIcon fontSize="large" />                  
                </IconButton>
                <Greeting/>
            </div>
        )
    }
}
