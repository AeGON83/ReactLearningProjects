import './App.css'

function App() {

  return (

    <div className='container'>
      <div className='img-container'></div>
      <div className='name-container'>
        <p>Rajan Makwana</p>
        <p>React Developer</p>
        <p>Madhada, Gujarat-364240</p>
      </div>
      <div className='btn-container'>
        <button id='email-btn'><i class="fas fa-envelope"></i><p>E-mail</p></button>
        <button id='linkedin-btn'><i class="fab fa-linkedin"></i><p>Linkedin</p></button>
      </div>
      <div className="disc-container">
        <h4>About</h4>
        <p>Hello, i'm Rajan and i use React to create beautiful UI for web. I have also knowledge of Next.js and Firebase.</p>
      </div>
      <div className="disc-container">
        <h4>Hobbies</h4>
        <p>I love to being creative, and as a developer it is must. I like to play vedeo games and read books in my spare time</p>
      </div>
      <div className='social'>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-github"></i>
      </div>
    </div>

  )
}

export default App
