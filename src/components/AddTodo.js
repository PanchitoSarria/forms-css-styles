import React from 'react'

const AddTodo = ({ handleAddTodo, handleInputText, todoText }) => {
  return (
    <form onSubmit={handleAddTodo}>
        <input type="text" onChange={handleInputText} value={todoText}/>
        <button>Add to-do</button>
    </form>
  )
}

export default AddTodo