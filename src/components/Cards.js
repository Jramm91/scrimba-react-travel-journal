export default function Cards() {
    return (
        <div className="cards">
            <img src="https://source.unsplash.com/WLxQvbMyfas" className="cards--image"/>
            <div className="cards--info">
                <div className="cards--location">
                    <p>map pin</p>
                    <p>JAPAN</p>
                    <a href="#" className="cards--location-url">View on Google Maps</a>
                </div>
                <h1 className="cards--title">Mount Fuji</h1>
                <div className="cards--dates">
                    {/* pull in start and end date from data into variable, contatinate into variable "Start - End" */}
                    <span className="cards--dates--start-date">12 Jan, 2021</span>
                    <span className="cards--dates--end-date">24 Jan, 2021</span>
                </div>
                <p className="cards--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}