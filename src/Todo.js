import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props);

        this.state={
            newItem:"",
            list:[]
        }
    }
    //update react state - should be used for local storage as I get farther in the project
    updateInput(key, value){
        this.setState({
            [key]: value
        })
    }

    //unique item with unique id so every time an item is input we can identify different list items
    addItem(){
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()

        }
        //copy of list items trying to take and add into list
        const list = [...this.state.list]

        //this should add new item
        list.push(newItem);

        //updates state with new list and resets newItem input
        this.setState({
            list,
            newItem:""
        })
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
                    <br/>
                    
                    <ul>
                        {this.state.list.map(item => {
                            //takes in the current state in list - I believe
                            //this.state.list.map should map over item
                            return(
                                //returning the list
                                <li key={item.id
                                //needs unique key
                                }>
                                    {item.value}
                                    <button onClick={() => this.deletItem(item.id)
                                    //will take item so we can delete item id (double check)
                                    } >X</button>
                                </li>
                            )
                        })}
                    </ul>
                
            </div>
        )
    }
}
