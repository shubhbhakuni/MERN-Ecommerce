import {Link} from 'react-router-dom';
import ProductCard from '../components/product-card';

const Home = () => {

  const addToCartHandler = () => {};
  return (
    <div className ="home">
      <section> </section>

      <h1>
        Latest Products
        <Link to="/search" className = "findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard 
          productId="asdfgh" 
          name="Macbook" 
          price={40000} 
          stock={435} 
          handler = {addToCartHandler}
          photo ="https://m.media-amazon.com/images/I/41DeT328kPL._AC_SY450_.jpg"
        />
      </main>
    </div>
  );
};

export default Home