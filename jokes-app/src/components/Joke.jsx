export default function Joke({ jokeTitle, joke }) {
    return (
        <div className="container">
            <div className="joke-title"><p><br />{jokeTitle}</p></div>
            <div className="joke"><p>{joke}</p></div>
        </div>
    )
}