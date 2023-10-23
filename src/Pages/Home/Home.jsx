import React, { useEffect, useState } from "react";
import Item from "../../Components/Item/Item";
import TimeCounter from "../../Components/TimeCounter/TimeCounter";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleAddToCart = (item) => {
    const newCart = [...data, item];
    setData(newCart);
  };
  return (
    <div className="card-container container mx-auto">
      <div className="cards ">
        {items.map((item) => (
          <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="count sticky top-0">
        <TimeCounter />
        <div className="cart ">
          {data.map((item) => (
            <div key={item.id}>
              <h1 className="text-xl mx-auto bg-gray-100 p-3 m-2 rounded-lg">{item.Title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
