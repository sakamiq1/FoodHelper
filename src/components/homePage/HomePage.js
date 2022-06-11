import React, { useEffect, useState } from "react";
import foodApis from "../../apis/foodApis";
import { useLocation } from "react-router-dom";
import { List, Card, Button, Row } from "antd";
import "./index.css";

const HomePage = () => {
  const { state } = useLocation();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    foodApis
      .get(`?price=${state.price}`)
      .catch((err) => console.log(err))
      .then((res) => setFoods(res.data.data));
  }, []);

  return (
    <div className="home-container">
      <List
        pagination={{ pageSize: 8 }}
        dataSource={foods}
        grid={{ gutter: 16, column: 4 }}
        renderItem={(food) => (
          <Card
            title={food.name}
            style={{ width: 300 }}
            extra={
              <img
                src={food.image_url}
                className="food-image"
                alt={food.image_url}
              />
            }
          >
            <p>nutrition : {food.nutrition}</p>
            <p>order : {food.order}</p>
            <p>price : {food.price}</p>
            <div className="react-container">
              <Button>👍 {food.like}</Button>
              <Button>👎 {food.dislike}</Button>
            </div>
          </Card>
        )}
      />
    </div>
  );
};

export default HomePage;
