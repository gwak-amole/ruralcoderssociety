import {BrowserRouter as Router, Route} from 'react-router-dom'

import MyButton from '../components/Button'
import Navbar from '../components/Navbar';

function App() {
  return (
    <div className="App">
        <h1>My React Website</h1>
        <MyButton />
    </div>
  )
}

export default App;