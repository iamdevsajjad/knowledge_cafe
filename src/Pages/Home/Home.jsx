import React, { useEffect, useState } from "react";
import Item from "../../Components/Item/Item";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="card-container container mx-auto">
      <div className="cards ">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className="count">hi</div>
    </div>
  );
};

export default Home;
