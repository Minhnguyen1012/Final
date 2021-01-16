import React, { useEffect } from "react";
import { Button, Card, CardGroup, Image, NavLink, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import cartActions from "../redux/actions/cart.actions";
import foodActions from "../redux/actions/food.actions";

const Cards = () => {
  const history = useHistory();
  const foods = useSelector((state) => state.food.foods);
  const dispatch = useDispatch();

  if (foods) {
    console.log(foods[0].images[0]);
  }
  const handleClick = (id) => {
    history.push(`/detail:id`);
  };
  const handleAddFoodToCart = (food) => {
    console.log("handle add", food);
    dispatch(cartActions.cartsRequest(food));
  };
  return (
    <Row>
      {foods &&
        foods.map((food) => (
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
              <h5 className="text-menu "> {food.price * 1000} VNÄ</h5>
              <Button
                className="mr-3"
                onClick={() => handleAddFoodToCart(food)}
                variant="warning"
              >
                Add
              </Button>
              <Button
                variant="outline-warning"
                onClick={() => handleClick(food._id)}
              >
                {" "}
                Detail
              </Button>
            </Card.Body>
          </CardGroup>
        ))}
    </Row>
  );
};

export default Cards;
