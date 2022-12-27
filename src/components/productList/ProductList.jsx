import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import image1 from "../../img/featured-hand-react-1800x1040.jpg";
import image2 from "../../img/1_YxAtSkRVmtOwtY1q81wpQ.jpg";
import image3 from "../../img/1200px-Node.js_logo.png";
import image4 from "../../img/best-php-frameworks-1.jpg";
import image5 from "../../img/Expressjs.png";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's duythinhdev</h1>
        <p className="pl-desc">
          duythinhdev is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {/* {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))} */}
        <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={"/"} target="_blank" rel="noreferrer">
          <img src={image1} alt="" className="p-img" />
        </a>
        </div>
        <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={"/"} target="_blank" rel="noreferrer">
          <img src={image2} alt="" className="p-img" />
        </a>
        </div>
        <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={"/"} target="_blank" rel="noreferrer">
          <img src={image3} alt="" className="p-img" />
        </a>
        </div>
        <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={"/"} target="_blank" rel="noreferrer">
          <img src={image4} alt="" className="p-img" />
        </a>
        </div>
        <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={"/"} target="_blank" rel="noreferrer">
          <img src={image5} alt="" className="p-img" />
        </a>
        </div>
        <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={"/"} target="_blank" rel="noreferrer">
          <img src={image1} alt="" className="p-img" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
