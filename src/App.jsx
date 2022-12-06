import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import ReactMarkdown from 'react-markdown'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  const [text, setText] = useState(
  '\n# Markdown previewer application\n\n' +
  '## This is a small web app that renders any markdown that is inputted into this box\n\n' +
  'This is an example of a paragraph\n\n' +
  '[Basic Markdown Syntax can be found at this website](https://www.markdownguide.org/basic-syntax/)\n\n' +
  ''
  
  );

  
  return (
    <div className="App">

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>
        <p>
        Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      
      
      
<textarea id="editor" onChange={(event) => {
  setText(event.target.value);
}}
value = {text}>
      </textarea>
      <div id="preview">
        <ReactMarkdown>
      {text}
        </ReactMarkdown>
      </div>

      <p>Created with Vite + React by Mumtahin Farabi</p>
      
    </div>
    
  )
}

export default App
