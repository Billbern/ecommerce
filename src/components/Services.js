import "./Services.css";

export default function Services() {
    return (
        <div className="services">
            <div className="service-item">
                <div className="service-img">
                    <img src={require("../assets/images/organicpepper.svg").default} alt="" />
                </div>
                <div className="service-body">
                    <h5>Organic Food</h5>
                    <p>Sumptuous filling and tempting healthy Food and Compitation</p>
                </div>
            </div>
            <div className="service-item">
                <div className="service-img">
                    <img src={require("../assets/images/organicpepper.svg").default} alt="" />
                </div>
                <div className="service-body">
                    <h5>Organic Food</h5>
                    <p>Sumptuous filling and tempting healthy Food and Compitation</p>
                </div>
            </div>
            <div className="service-item">
                <div className="service-img">
                    <img src={require("../assets/images/organicpepper.svg").default} alt="" />
                </div>
                <div className="service-body">
                    <h5>Organic Food</h5>
                    <p>Sumptuous filling and tempting healthy Food and Compitation</p>
                </div>
            </div>
        </div>
    )
}