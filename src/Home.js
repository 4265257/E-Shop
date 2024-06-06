import Product from "./Product";
import CrochetPic from "./crochetPic.jpg";
import "./Home.css";
import {products} from "./data/data"

function Home() {
  return (
    <div className="home">
      {/* <img
          className="picCrochet"
          src={CrochetPic}
          alt="picCrochet"
        /> */}
      <div className="home_container">
        <div className="home_row">
          {products.map((product) =>
          <Product key={product.id} product={product}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
