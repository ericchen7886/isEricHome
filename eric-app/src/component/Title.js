import React, { Component } from 'react'
import styled from 'styled-components';

export const TitleStyleS = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: red;
`;

export default class Title extends Component {
    
    render() {
        return (
            <div>
                <TitleStyleS>
                    <h2>代辦事項 ({this.props.todos.length})</h2> 
                </TitleStyleS>    
            </div>
        )
    }
}
