import './App.css'
import Joke from './components/Joke'

function App() {
  return (
    <div className='App'>
      <h1>Jokes⚠</h1>
      <div className='main'>
        <Joke jokeTitle='Brits and Developement' joke='I find it funny when British leaders call Colonial loot as Colonial Developement.' />
        <Joke jokeTitle='Aaloo and Sona' joke='Does it ring a bell lol.' />
        <Joke jokeTitle='Seculers of India' joke='Seculer people of India are often called as peacefull community.' />
        <Joke jokeTitle='LOLOLOLOLOLOLO' joke='LOLOLOL OLOLOLOLOLOLOLOLOLO LOLOLOLOLOL OLOLOLOLOLOLOLOL OLOLOLOLOL OLOLOLO' />
        <Joke jokeTitle='Brits and Developement' joke='I find it funny when British leaders call Colonial loot as Colonial Developement.' />
        <Joke jokeTitle='LOLOLOLOLOLOLO' joke='LOLOLOL OLOLOLOLOLOLOLOLOLO LOLOLOLOLOL OLOLOLOLOLOLOLOL OLOLOLOLOL OLOLOLO' />
      </div>
    </div>
  )
}

export default App
