import React from "react";
import { Col, Row } from "react-bootstrap";
import Carousels from "../components/Carousels";
import PublicNavbar from "../components/PublicNavbar";
const StoryPage = () => {
  return (
    <>
      <PublicNavbar />
      <Carousels />

      <div
        class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3>
          Voluptatem dignissimos provident quasi corporis voluptates sit
          assumenda.
        </h3>
        <p class="font-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>
            <i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </li>
          <li>
            <i class="ri-check-double-line"></i> Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </li>
          <li>
            <i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
            pariatur.
          </li>
        </ul>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div
        class="col-lg-6 order-1 order-lg-2 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img alt="" />
      </div>
    </>
  );
};

export default StoryPage;
