import React, { useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PublicNavbar from "../components/PublicNavbar";
import foodActions from "../redux/actions/food.actions";

const DetailPage = (food) => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.foods);
  if (foods) {
    console.log(foods[0].images[0]);
  }
  useEffect(() => {
    dispatch(foodActions.foodsRequest());
  }, [dispatch]);

  return (
    <div>
      <PublicNavbar />
      <CardGroup
        className="card"
        style={{
          width: "19.1rem",
          height: "33rem",
          margin: "18px",
          // border: "0.75px solid silver",
        }}
      >
        <Card.Img
          style={{ width: "19rem", height: "22rem" }}
          variant="top"
          src={food.images}
          alt={food.name}
        />
        <Card.Body style={{ paddingLeft: "0px" }}>
          <Card.Title style={{ fontSize: "25px" }}>
            <strong>{food.name}</strong>
          </Card.Title>
          <h5 className="text-menu "> {food.price * 1000} VNĐ</h5>
        </Card.Body>
      </CardGroup>
    </div>
  );
};

export default DetailPage;
