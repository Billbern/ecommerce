import './Blog.css';

export default function Blog() {
    return (
        <div className="blog-content">
            <h4>Blog & Articles</h4>
            <div className="blog-container">
                <div className="blog-item">
                    <img src={require("../assets/images/orangefarm.png")} alt="" />
                    <div className="blog-body">
                        <div>
                            13 January 2021
                        </div>
                        <h5>Best guide to shopping for organic ingredients</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Itaque quibusdam fuga, aperiam, natus, aut earum tenetur maxime dicta doloribus laborum
                        </p>
                        <a href="#">READ ME  </a>
                    </div>
                </div>
                <div className="blog-item">
                    <img src={require("../assets/images/mangofarm.png")} alt="" />
                    <div className="blog-body">
                        <div>
                            14 January 2021
                        </div>
                        <h5>Zechsal Magnesium flakes especially made</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Itaque quibusdam fuga, aperiam, natus, aut earum tenetur maxime dicta doloribus laborum
                        </p>
                        <a href="#">READ ME  </a>
                    </div>
                </div>
                <div className="blog-item">
                    <img src={require("../assets/images/allfarm.png")} alt="" />
                    <div className="blog-body">
                        <div>
                            28 January 2021
                        </div>
                        <h5>Finding a way to separate 'work' to do a business</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Itaque quibusdam fuga, aperiam, natus, aut earum tenetur maxime dicta doloribus laborum
                        </p>
                        <a href="#">READ ME  </a>
                    </div>
                </div>
            </div>
        </div>
    )
}