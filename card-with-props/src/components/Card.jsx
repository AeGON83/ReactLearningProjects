export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card-img-container">
                <img src={props.url} alt="image-link-broken" className='card-img' />
                <p className="img-lable">{props.lable}</p>
            </div>
            <div className="info-container">
                <div className='rating-bar'>
                    <i className="fas fa-star"></i><strong>{props.rating}</strong>
                    <p>({props.ratingCount})•USA</p>
                </div>
                <p className="title-info">{props.title}</p>
                <div className="price-bar">
                    <strong>
                        From $<p className="price">{props.price}</p>
                    </strong>
                    <p>/ person</p>
                </div>
            </div>
        </div>
    )
}