import { useState } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import ProjectList from './components/ProjectList'

function App() {
  const [selected, setFilter] = useState('All')

  return (
    <div className='App'>
      <Toolbar
        filters = {["All", "Websites", "Flayers", "Business Cards"]}
        selected = "All"
        onSelectFilter={(filter) => setFilter(filter.target.innerText)}/>
      <ProjectList selected={selected} />
    </div>
  );
}
export default App
