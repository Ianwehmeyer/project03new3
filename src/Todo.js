import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (

            <div id="App">
                <form id="todoform1">
                    <input type="text" placeholder="Enter What you need to do..."/>    
                    <button type="submit">Press Me</button>
                </form>    
            </div>
        )
    }
}
