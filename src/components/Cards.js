export default function Cards() {
    return (
        <div className="cards">
            <img src="https://source.unsplash.com/WLxQvbMyfas" className="card--image"/>
            <div className="card--location">
                <p>map pin</p>
                <p>JAPAN</p>
                <a href="#" className="card--maps-link">View on Google Maps</a>
            </div>
            <h1 className="card--title">Mount Fuji</h1>
            <div className="card--dates">
                {/* pull in start and end date from data into variable, contatinate into variable "Start - End" */}
                <span className="card--dates--start-date">12 Jan, 2021</span>
                <span className="card--dates--end-date">24 Jan, 2021</span>
            </div>
            <h3 className="card--date">12 Jan, 2021 - 24 Jan, 2021</h3>
            <p className="card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    )
}