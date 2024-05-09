import React, { useState } from 'react';
import { Container, Box, MapDiv, Buttons } from '../style';

function TodoList() {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleAddText() {
    if (text.trim() !== '') {
      setTexts(prevTexts => [...prevTexts, text]);
      setText('');
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleAddText();
    }
  }

  return (
    <div>
      <Container>
        <h1>To-Do List App</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
          <input type="text" value={text} onChange={handleChange} placeholder='Enter Task'  onKeyPress={handleKeyPress} />
          <button onClick={handleAddText}>Add</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: "20px", gap: "10px", height: "200px", overflowY: "scroll", width: "400px"}}>
          {texts.map((txt, id) => (
            <MapDiv key={id}>
              <p>{txt}</p>
              <div>
                <Buttons $edit>Edit</Buttons>
                <Buttons>Delete</Buttons>
              </div>
            </MapDiv>

          ))}
        </div>
      </Container>
      <Box />
    </div>
  );
}

export default TodoList;
