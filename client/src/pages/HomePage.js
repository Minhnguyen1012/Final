import PublicNavbar from "../components/PublicNavbar";

import React, { useEffect } from "react";
import Carousels from "../components/Carousels";
import Cards from "../components/Cards";
import { Button } from "react-bootstrap";
import HoverRating from "../components/HoverRating";
import homeImage from "../images/homeImage.jpeg";
import foodActions from "../redux/actions/food.actions";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.foods);
  if (foods) {
    console.log(foods[0].images[0]);
  }
  useEffect(() => {
    dispatch(foodActions.foodsRequest());
  }, [dispatch]);

  return (
    <div className=" home">
      <PublicNavbar />
      <Carousels />

      <div className="d-flex justify-content-between ml-5 mt-5 mr-5">
        <h1 className="text-menu">Menu</h1>
        <Button>All products</Button>
      </div>
      <div className="card">
        {" "}
        <Cards />
      </div>

      <HoverRating />
      {/* <div styles={{ backgroundImage: `url(${homeImage})` }}></div> */}
      {/* <img src={homeImage} style={{ height: "100%", width: "100%" }} /> */}
    </div>
  );
};

export default Homepage;
