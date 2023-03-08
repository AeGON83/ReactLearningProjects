import './App.css'
import LocationCard from './components/LocationCard'
import dataArr from './components/data'

function App() {
  const tags = dataArr.map(item => {
    return (
      <LocationCard
        key={item.title}
        dataObj={item}
      />
    )
  })
  return (
    <div className="main">
      <h4>My Travel Journal</h4>
      {tags}
    </div>
  )
}

export default App
