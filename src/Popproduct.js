function PopProduct(props){
    
    return(
        <div className="product-item">
            <div>
              <img src={props.img} alt="ghghjk"/>
            </div>
            <div>
                <h6>{props.tag}</h6>
                <h3>{props.name}</h3>
                <span>${props.price}/kg</span>
                <div className="item-number">
                    <input type="number" name="qty" id="qty"/>
                    <button>Add</button>
                </div>
            </div>
        </div>
)}

export default PopProduct;