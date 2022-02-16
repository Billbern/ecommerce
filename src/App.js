import { useState, useEffect } from 'react';
import './App.css';
import PopProduct from './Popproduct';
import axios from 'axios';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import Blog from './components/Blog';

function App() {

  const [data, setData] = useState([]);

  // async function getData(){
  //   const newData = await axios.get("http://localhost:8189/")
  //   if(newData.data){
  //     setData(newData.data.popularproduct)
  //   }
  // }

  // useEffect(async ()=>{
  //   const newData = await getData();
  // }, [])

  return (
    <div className="container">
      <div className='navbar split'>
        <div>
          <h1>Dreambuz</h1>
        </div>
        <div className="leftside">
          <div className="cartfavorite">
            <span>
              $ 0.00
            </span>
            <span>
              <img src={require("./assets/images/cart-svgrepo-com(1).svg").default} alt=""/>
            </span>
            <span>
              <img src={require("./assets/images/favourite-svgrepo-com.svg").default} alt=""/>
            </span>
          </div>
          <div>
            Account
          </div>
        </div>
      </div>
      <div className="toolbar split">
        <div>
          <span className="menu">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <label htmlFor="categ">Select Category</label>
          <select name="categories" id="categ">
            <option value="dietary">Dietary</option>
            <option value="freshfruits">Fresh Fruits</option>
            <option value="freshvegetable">Fresh Vegetable</option>
            <option value="freshmeat">Fdietaryresh Meat</option>
          </select>
        </div>
        <div>
          <div className="searchbox">
            <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.95 487.95">
              <path
                d="M481.8 453l-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z" />
            </svg>
            <input type="search" name="search" id="search" placeholder='search product'/>
          </div>
        </div>
      </div>
      <div className='hero split'>
        <div>
          <h1>Denver Organic Food</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, minima totam dolorem eos
            necessitatibus distinctio blanditiis quam voluptates animi architecto in alias molestias, odio quas
            repudiandae at voluptatum quis. Aspernatur.</p>
          <div>
            <a href="#">Discover More</a>
            <a href="#">About Us</a>
          </div>
        </div>
        <div>
          <img src={require("./assets/images/redmeat.png")} alt=""/>
        </div>
      </div>
      <div className="carousel">
        <div className="caro-item">
          <img src={require("./assets/images/dietary.jpg")} alt=""/>
        </div>
        <div className="caro-item">
          <img src={require("./assets/images/freshfruit.jpg")} alt=""/>
        </div>
        <div className="caro-item">
          <img src={require("./assets/images/freshvege.jpg")} alt=""/>
        </div>
        <div className="caro-item">
          <img src={require("./assets/images/freshmeat.jpg")} alt=""/>
        </div>
      </div>
      <div className="popular">
        <h3>Popular Product</h3>
        <div>
          {
            data.length > 1 
            ?
              data.map((item, key) =>{
                return(
                  <PopProduct key={key} name={item.name} tag={item.tag} price={item.price} discount={item.discount} specialoffer={item.specialoffer} img={require(`${item.img}`)} />
                )
              })
            : 
              <div className="product-item">
                <div>
                  <img src={require('./assets/images/blank.jpg')} alt="ghghjk"/>
                </div>
                <div>
                  <h6>Tag</h6>
                  <h3>Product</h3>
                  <span>$0/kg</span>
                  <div className="item-number">
                      <input type="number" name="qty" id="qty"/>
                      <button>Add</button>
                    </div>
                </div>
            </div>
          }
        </div>
      </div>
      <div className="popular-nav split">
        <div>
          <span>&larr;</span>
          <span>&rarr;</span>
        </div>
        <div>
          <button>All Trending</button>
        </div>
      </div>
      <div className="special">
        <div>
          <div>
            <h2>Black Friday</h2>
            <p>50% OFFER FOR THIS WEEK</p>
          </div>
          <div className="foodbg">
            <img src={require("./assets/images/lettucebg.png")} alt=""/>
          </div>
        </div>
        <div>
          <div>
            <h2>Black Offer</h2>
            <p>50% OFFER FOR THIS WEEK</p>
          </div>
          <div className="foodbg">
            <img src={require("./assets/images/pineappleback.png")} alt=""/>
          </div>
        </div>
        <div>
          <div>
            <h2>Black Grapes</h2>
            <p>50% OFFER FOR THIS WEEK</p>
          </div>
          <div className="foodbg last">
            <img src={require("./assets/images/grapesbg.png")} alt=""/>
          </div>
        </div>
      </div>
      <div className="best-seller">
        <h3>Best Seller</h3>
        <div>
          <div className="product-item">
            <div>
              <img src={require("./assets/images/redmeat.png")} alt=""/>
            </div>
            <div>
              <h6>Vegetable</h6>
              <h3>Chinese Nuisen Napa</h3>
              <span>$9.00/kg</span>
              <div className="item-number">
                <input type="number" name="" id=""/>
                <button>Add</button>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div>
              <img src={require("./assets/images/freshfish.png")} alt=""/>
            </div>
            <div>
              <h6>Vegetable</h6>
              <h3>Chinese Nuisen Napa</h3>
              <span>$9.00/kg</span>
              <div className="item-number">
                <input type="number" name="" id=""/>
                <button>Add</button>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div>
              <img src={require("./assets/images/freshchicken.png")} alt=""/>
            </div>
            <div>
              <h6>Vegetable</h6>
              <h3>Chinese Nuisen Napa</h3>
              <span>$9.00/kg</span>
              <div className="item-number">
                <input type="number" name="" id=""/>
                <button>Add</button>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div>
              <img src={require("./assets/images/freshonion.png")} alt=""/>
            </div>
            <div>
              <h6>Vegetable</h6>
              <h3>Chinese Nuisen Napa</h3>
              <span>$9.00/kg</span>
              <div className="item-number">
                <input type="number" name="" id=""/>
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="best-seller-nav split">
        <div>
          <span>&larr;</span>
          <span>&rarr;</span>
        </div>
        <div>
          <button>All Trending</button>
        </div>
      </div>
      <div className="deadline">
        <h6>Offer End In</h6>
        <div>
          <div>
            <h2>284</h2>
            <h6>Days</h6>
          </div>
          <div>
            <h2>06</h2>
            <h6>Hours</h6>
          </div>
          <div>
            <h2>09</h2>
            <h6>Minutes</h6>
          </div>
          <div>
            <h2>42</h2>
            <h6>Seconds</h6>
          </div>
        </div>
      </div>
      <div className="best-seller">
        <div>
          <div className="product-item">
            <div>
              <img src={require("./assets/images/redmeat.png")} alt=""/>
            </div>
            <div>
              <h6>Vegetable</h6>
              <h3>Chinese Nuisen Napa</h3>
              <span>$9.00/kg</span>
              <div className="item-number">
                <input type="number" name="" id=""/>
                <button>Add</button>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div>
              <img src={require("./assets/images/freshfish.png")} alt=""/>
            </div>
            <div>
              <h6>Vegetable</h6>
              <h3>Chinese Nuisen Napa</h3>
              <span>$9.00/kg</span>
              <div className="item-number">
                <input type="number" name="" id=""/>
                <button>Add</button>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div>
              <img src={require("./assets/images/freshchicken.png")} alt=""/>
            </div>
            <div>
              <h6>Vegetable</h6>
              <h3>Chinese Nuisen Napa</h3>
              <span>$9.00/kg</span>
              <div className="item-number">
                <input type="number" name="" id=""/>
                <button>Add</button>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div>
              <img src={require("./assets/images/freshonion.png")} alt=""/>
            </div>
            <div>
              <h6>Vegetable</h6>
              <h3>Chinese Nuisen Napa</h3>
              <span>$9.00/kg</span>
              <div className="item-number">
                <input type="number" name="" id=""/>
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="duplex-offer">
        <div></div>
        <div></div>
      </div>
      <Testimonial/>
      <Services/>
      <Blog/>
      <div className="blog-nav split">
        <div>
          <span>&larr;</span>
          <span>&rarr;</span>
        </div>
        <div>
          <button>All Trending</button>
        </div>
      </div>
      <div>
        <h6>Dreambuzz</h6>
        <div>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
      <div className="footer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <small>
          Copyright &copy;example 2021 all right reserved
        </small>
      </div>
    </div>
  );
}

export default App;
