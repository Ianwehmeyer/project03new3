import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props);

        this.state={
            newItem:"",
            list:[]
        }
    }
    //unique item with unique id so every time an item is input we can identify different list items
    addItem(){
        const newItem={
            id: 1 + Math.random(),
            
        }
    }
    render() {
        return (
            <div>
                Add Item to List 
                <br/>
                <input 
                    type="test"
                    placeholder="Type item here..."
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)}
                />
                <button 
                    onClick={() => this.addItem()}>
                        Add To List
                    </button>
                
            </div>
        )
    }
}
