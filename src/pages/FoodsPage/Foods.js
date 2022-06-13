import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { fetchFoods, getAllFoods } from "../../features/foodSlice";
import axios from "axios";
import { Card, List } from "antd";
import "./index.scss";
import chefimg from "../../assets/chef-removebg-preview.png";

const Foods = () => {
  const dispatch = useDispatch();
  const [foods, setFoods] = useState([]);

  //   useEffect(() => {
  //     dispatch(fetchFoods({ budget, nutricheck, nutrition }));
  //   }, [dispatch]);

  useEffect(() => {
    axios
      .get("data.json")
      .catch((err) => console.log(err))
      .then((res) => setFoods(res.data));
  }, []);

  return (
    <div className="foods-container">
      <h1 id="greeting">bon appétit</h1>
      <div className="menu-open-img">
        <div className="chef-img-container">
          <Link to="/form">
            <img src={chefimg} alt="chef-image" />
          </Link>
        </div>
      </div>
      {foods && (
        <List
          pagination={{ pageSize: 8, style: { marginRight: "3em" } }}
          className="menu-container"
          grid={{ gutter: [8, 32], column: 4 }}
          dataSource={foods}
          renderItem={(item) => (
            <Card
              cover={<img src={item.image_url} alt="food-image" />}
              key={item.name}
            >
              <h3>{item.name}</h3>
            </Card>
          )}
        />
      )}
    </div>
  );
};

export default Foods;
