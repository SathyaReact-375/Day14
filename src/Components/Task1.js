import React from 'react'

function Task1() {
  return (
   <>
    <div style={{textAlign:"center"}}>
        <h1>Task1</h1>
        <div>
  <h2>Introduction to Forms in React</h2>
  <p>
    Forms in React are used to collect user input, such as text, numbers, or selections. React provides a way to manage form data efficiently through its component-based structure.
  </p>
  
  <h3>Controlled Components</h3>
  <p>
    In controlled components, form elements like <code>input</code> or <code>textarea</code> are controlled by React state. The component’s state is the "single source of truth," meaning the form element's value is tied to the state, and updates trigger a re-render.
  </p>
  <ul style={{listStyleType:"none"}}>
    <li>The value of the input is controlled using a <code>value</code> attribute.</li>
    <li>Changes are handled through an <code>onChange</code> event handler.</li>
  </ul>

  <h3>Uncontrolled Components</h3>
  <p>
    In uncontrolled components, form elements maintain their own state internally without relying on React state. You access their values using a <code>ref</code>.
  </p>
  <ul style={{listStyleType:"none"}}>
    <li>Useful for simpler use cases or when integration with third-party libraries is needed.</li>
    <li>No need to manage React state explicitly for the form element.</li>
  </ul>
</div>
    </div>
   </>
  )
}

export default Task1
