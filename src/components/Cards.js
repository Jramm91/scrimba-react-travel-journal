export default function Cards(props) {
    console.log(props)

    return (
        <div className="cards">
            <img src={props.imageUrl} className="cards--image"/>
            <div className="cards--info">
                <div className="cards--location">
                    <img src="../../compass-outline.svg" className="cards--location-compass"/>
                    <p>{props.country}</p>
                    <a href={props.googleMapsUrl} className="cards--location-url">View on Google Maps</a>
                </div>
                <h1 className="cards--title">{props.title}</h1>
                <div className="cards--dates">
                    <span>{`${props.startDate} - ${props.endDate}`}</span>
                </div>
                <p className="cards--description">{props.description}</p>
            </div>
        </div>
    )
}