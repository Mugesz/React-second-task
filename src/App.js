import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Cart from "./section/Cart";
import Footer from "./footer/Footer";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const handleTotal = () => {
      let price = 0;
      cart.forEach((item) => {
        price += Number(item.newPrize * item.quantity);
      });
      setTotal(price);
    };

    handleTotal();
  }, [cart]);

  const handleChange = (item, quantity) => {
    const updatedCart = cart.map((existingItem) => {
      if (existingItem.title === item.title) {
        const updatedQty = existingItem.quantity + quantity;
        return { ...existingItem, quantity: updatedQty > 0 ? updatedQty : 1 };
      } else {
        return existingItem;
      }
    });

    setCart(updatedCart);
  };

  const addcartItem = (product) => {
    const updatedTotal = total + product.newPrize * product.quantity;
    setCart([...cart, { ...product, quantity: 1 }]);
    setTotal(updatedTotal);
  };

  const delCardItem = (product) => {
    const updatedTotal = total - product.newPrize * product.quantity;
    const updatedCart = cart.filter((item) => item.title !== product.title);
    setCart(updatedCart);
    setTotal(updatedTotal);
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

  const isInCart = (product) =>
    cart.some((item) => item.title === product.title);

  return (
    <div className="App">
      <Navbar
        cartCount={cart.length}
        addcartItem={cart}
        total={total}
        delCardItem={delCardItem}
        handleChange={handleChange}
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
