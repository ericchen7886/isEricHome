import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.state = ({
            item: ''
        });
        
        this.addItem = this.addItem.bind(this);
    }

    addItem(){
        if(!this.state.item){
            return;
        }
        this.props.addItem(this.state.item);
        this.setState({
            item: ''
        });
    }

    handleAddInputItem(event){
        this.setState({
            item: event.target.value
        });
    }

    handleKeyDownHandle(event){
        if(event.keyCode === 13){
            // this.setState({
            //     item: event.target.value
            // });
            this.addItem();
        }
    }

    render() {
        return (
            <div>
                <input 
                onChange={ event => this.handleAddInputItem(event)} 
                onKeyDown = {event => this.handleKeyDownHandle(event)}
                value = {this.state.item}
                />
                {/* <button onClick={() => this.addItem()}>新增</button> */}
                <button onClick={this.addItem}>新增</button>
            </div>
        )
    }
}
