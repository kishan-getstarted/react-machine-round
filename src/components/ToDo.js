import { useState } from "react"

const ToDo = () => {
    const [todo, setToDo] = useState([])
    const [input, setInput] = useState('')

    const onChangeInput = (e) => {
        if(e.key === 'Enter' ) {

          setToDo([...todo, {
            isComplete: false,
            text: input
          }])
          setInput('')
        }
    }
    const toggleComplete = (indexToToggle) => {
        setToDo(todo.map((item, index) => 
            index === indexToToggle 
                ? { ...item, isComplete: !item.isComplete }
                : item
        ))
    }
    return (
        <div style={{
            direction: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
           
        }}>
           <h1>To Do</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={onChangeInput} />
            <button onClick={() => setToDo([...todo, input])}>Add</button>
            <ul style={{
                listStyle: 'none',
            }}>
                {todo.map((item, index) => (
                    <li key={index} style={{
                        textDecoration: item.isComplete ? 'line-through' : 'none',
                    }}>

                        <input type="checkbox" checked={item.isComplete} 
                            onChange={() => toggleComplete(index)}
                        />
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo