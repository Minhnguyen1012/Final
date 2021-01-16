import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { faCartPlus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cartActions from "../redux/actions/cart.actions";
import { useSelector, useDispatch } from "react-redux";
const Modals = () => {
  const [lgShow, setLgShow] = useState(false);
  const cartFoods = useSelector((state) => state.cart.cartFoods);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log("put this t to this", cartFoods);
    dispatch(cartActions.createNewCart(cartFoods));
  };

  return (
    <>
      <Button variant="light" onClick={() => setLgShow(true)}>
        <FontAwesomeIcon icon={faCartPlus} />
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-tuan-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-tuan-sizes-title-lg">
            Your Shopping Card
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div
              id="cartModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div role="document">
                <div>
                  <div className="tuan-header border-bottom-0">
                    <h5 id="exampleModalLabel"></h5>
                  </div>
                  <div className="tuan-body">
                    <table className="table table-image">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Qty</th>
                          <th scope="col">Total</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartFoods &&
                          cartFoods.map((cart) => {
                            return (
                              <tr className="w-25">
                                <img
                                  src={cart.images}
                                  className="img-fluid img-thumbnail "
                                  style={{ height: "80px", width: "80px" }}
                                  alt="Sheep"
                                />

                                <td>{cart.name}</td>
                                <td>{cart.price * 1000}</td>
                                <td className="qty">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="input1"
                                    value="2"
                                  />
                                </td>

                                <td>Total</td>
                                <td>Actions</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                      <h5>
                        Total: <span className="price text-success">89$</span>
                      </h5>
                    </div>
                  </div>
                  <div className="tuan-footer border-top-0 d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="tuan"
                      onClick={() => setLgShow(false)}
                    >
                      Close
                    </button>
                    <button
                      onClick={() => handleSubmit()}
                      type="button"
                      className="btn btn-success"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
