export default function LocationCard({ key, dataObj }) {
    return (
        <div className="card-container">
            <img src={dataObj.imgLink} alt="lol" />
            <div className="details-container">
                <div className="location-bar">
                    <i className="fas fa-map-marker-alt"></i>
                    {dataObj.country && <p className="location-country">{dataObj.country}</p>}
                    <a href={dataObj.mapLink} target='_blank' className="location-link">View on Google Maps</a>
                </div>
                <p className="location-title">{dataObj.title}</p>
                <p className="travel-time">{dataObj.dateFrom + ' - ' + dataObj.dateTo}</p>
                <p className="travel-notes">{dataObj.notes}</p>
            </div>
        </div>
    )
}