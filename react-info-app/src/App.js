import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
  return (
    <>
      <img src={logo} className='back-img' />
      <Navbar />
      <Content />
    </>
  );
}

export default App;
