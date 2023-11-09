import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Cart from "./section/Cart";
import Footer from "./footer/Footer";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addcartItem = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.newPrize);
  };

  let delCardItem = (product) => {
    let itemIndex = cart.findIndex((obj) => obj.id === product.id);
    cart.splice(itemIndex, 1);
    setCart([...cart]);
    setTotal(total - product.newPrize);
  };

  const products = [
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      rating: false,
      newPrize: 40,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      rating: true,
      sale: "Sale",
      oldPrize: "$20",
      newPrize: 18.0,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      rating: false,
      sale: "Sale",
      oldPrize: "$50",
      newPrize: 18,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: true,
      newPrize: 20,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      rating: false,
      sale: "Sale",
      newPrize: 20,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      rating: false,
      newPrize: 280,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      rating: true,
      sale: "Sale",
      oldPrize: "$20",
      newPrize: 18,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: true,
      newPrize: 40,
    },
  ];

  const isInCart = (product) => cart.some((item) => item.title === product.title);

  return (
    <div className="App">
      <Navbar
        cartCount={cart.length}
        addcartItem={cart}
        total={total}
        delCardItem={delCardItem}
      />
      <Header />

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product, index) => {
              return (
                <Cart
                  key={index}
                  product={product}
                  addcartItem={addcartItem}
                  isInCart={() => isInCart(product)}
                  delCardItem={delCardItem}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
