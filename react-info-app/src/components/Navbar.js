import logo from '../logo.svg';

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='logo-title'>
                <img className='App-logo' src={logo} />
                <h2>ReactFacts</h2>
            </div>
            <h4>React Cource - Project 1</h4>
        </nav>
    )
}