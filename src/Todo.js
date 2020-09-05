import React from 'react'


export default props => (
<div style={{ display: "flex", justifyContent: 'center'}}>
<div style={{
    textDecoration: props.todo.complete ? 'line-through' : ""
}} onClick={props.slashThrough}>{props.todo.text}</div>
<button>Delete</button>
<button onClick={props.deleteItem}>X</button>
</div>
)
