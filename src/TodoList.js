import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default class TodoList extends Component {
    state = {
        //keep state in parent component 
        todos: []
        
    }
    addTodo = (todo) => {
        
        this.setState({
           todos: [todo, ...this.state.todos]
        })
    }
    slashThrough = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                //will update
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                    }
                    else {
                    return todo
                }
            })
        })
    }

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {this.state.todos.map(todo => (
                <Todo 
                key={todo.id} 
                slashThrough={() => this.slashThrough(todo.id)} 
                //lamda function passes parameter from map
                deleteItem={() => this}
                todo={todo}/>
                ))}
                <div>
                    Needs to Be Done: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div>
                    <button></button>
                </div>
            </div>
        )
    }
}
