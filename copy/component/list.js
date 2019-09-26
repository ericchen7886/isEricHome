import React, { Component } from 'react'

export default class list extends Component {
    render() {
        const todosList = this.props.todos;
        return (
            <ol>
                {
                    todosList.map( (item,key) => {
                        return(
                            <li 
                            key = {item.id}
                            onClick = {()=>this.props.removes(item.id)}
                            >{item.item}</li>
                        );
                    })
                }
            </ol>
        )
    }
}

